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


export default function MainMenuPanel() {
  const [open, setOpen] = React.useState(false)
  const [openSubscription, setOpenSubscription] = React.useState(false)
  const [openAddSubscription, SetOpenAddSubscription] = React.useState(false)
  function handleClickOpen(){
    setOpen(true);
  };
  function handleClose(){
    setOpen(false);
  };
  function handleClickOpenSubscription(){
    setOpenSubscription(true);
  }; 
  function handleCloseSubscription(){
    setOpenSubscription(false);
  };
  function handleClickAddSubscription(){
    SetOpenAddSubscription(true);
  };
  function handleCloseAddSubscription(){
    SetOpenAddSubscription(false);
  };

  return (
    <MDBRow>
      <MDBCol sm='8' className='mb-3 mb-md-0'>
        <MDBCard>
          <MDBCardBody text='dark'>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickOpen}> 
          list of subscriptions
            </MDBBtn>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickAddSubscription}>
              add subscription
            </MDBBtn>
            <MDBBtn MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}}>
              edit subscription
            </MDBBtn>
            <MDBBtn MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}} onClick={handleClickOpenSubscription}>
              delete subscription
            </MDBBtn>
            <SubscriptionListings
        open={open}
        onClose={handleClose}
      />
      <SelectSubscription open={openSubscription}
        onClose={handleCloseSubscription}/>
        <AddSubscription open={openAddSubscription}
        onClose={handleCloseAddSubscription}/>
                  </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}