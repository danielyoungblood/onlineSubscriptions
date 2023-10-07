import DeleteSubscription from './DeleteSubscription';
import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import SubscriptionListings from './SubscriptionListings';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SelectSubscription from './SelectSubscription';
import AddSubscription from './AddSubscription';
import EditSubscription from './EditSubscription';

export default function MainMenuPanel() {
  const [openListSubscriptions, setOpenListSubscriptions] = React.useState(false)
  const [openAddSubscription, setOpenAddSubscription] = React.useState(false)
  const [openSelectSubscription, setOpenSelectSubscription] = React.useState(false)
  const [openDeleteSubscription, setOpenDeleteSubscription] =React.useState(false)

  function handleOpenListSubscriptions(){
    setOpenListSubscriptions(true);
  };
  function handleCloseListSubscriptions(){
    setOpenListSubscriptions(false);
  };
  function handleOpenDeleteSubscription(){
    setOpenDeleteSubscription(true);
  }; 
  function handleCloseDeleteSubscription(){
    setOpenDeleteSubscription(false);
  };
  function handleOpenAddSubscription(){
    setOpenAddSubscription(true);
  };
  function handleCloseAddSubscription(){
    setOpenAddSubscription(false);
  };
function handleOpenSelectSubscription(){
    setOpenSelectSubscription(true);
  };
  function handleCloseSelectSubscription(){
    setOpenSelectSubscription(false);
  };

  return (
    <MDBRow>
      <MDBCol sm='8' className='mb-3 mb-md-0'>
        <MDBCard>
          <MDBCardBody text='dark'>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleOpenListSubscriptions}> 
          list of subscriptions
            </MDBBtn>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleOpenAddSubscription}>
              add subscription
            </MDBBtn>
            <MDBBtn MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleOpenSelectSubscription}>
              edit subscription
            </MDBBtn>
            <MDBBtn MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleOpenDeleteSubscription}>
              delete subscription
            </MDBBtn>
            <SubscriptionListings
        open={openListSubscriptions}
        onClose={handleCloseListSubscriptions}
      />
      <DeleteSubscription open={openDeleteSubscription}
        onClose={handleCloseDeleteSubscription}/>
        <AddSubscription open={openAddSubscription}
        onClose={handleCloseAddSubscription}/>
        <SelectSubscription open={openSelectSubscription}
        onClose={handleCloseSelectSubscription}/>
                  </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}