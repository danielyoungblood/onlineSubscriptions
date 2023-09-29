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

export default function MainMenuPanel() {
  return (
    <MDBRow>
      <MDBCol sm='8' className='mb-3 mb-md-0'>
        <MDBCard>
          <MDBCardBody text='dark'>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}}> 
          list of subscriptions
            </MDBBtn>
            <MDBBtn className='m-1' style={{ padding: '20px', width: '230px'}}>
              subscription management
            </MDBBtn>
                  </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}