import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from "react";
import { TextField } from '@mui/material';

export default function EditSubscription(props) {
  const {open, onClose, selectId, editName, editCost, editFrequency, editCompanyId} = props
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedCost, setSelectedCost] = useState(""); 
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  


  function handleCancel() {
      onClose()
  };

  async function handleSave() {
      onClose()
  };

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form method='POST' action={"https://onlinesubscriptionsapi-8fec69ac21bc.herokuapp.com/subscriptions/"+ selectId}>
        <DialogTitle id="alert-dialog-title">
          {"edit a subscription"}
        </DialogTitle>
        <DialogContent>
     
                
            <TextField defaultValue={editName} id="name" label="Name" name="name" variant="outlined" margin="normal" />
                <br></br>
                <TextField defaultValue={editCost} id="cost" label="Cost" name="cost" variant="outlined" margin="normal" />
                <br></br>
                <TextField defaultValue={editFrequency} id="frequency" label="Frequency" name="frequency" variant="outlined" margin="normal" />
                <br></br>
                <TextField defaultValue={editCompanyId} id="company_id" label="Company_id" name="company_id" variant="outlined" margin="normal" />
                <br></br>
            </DialogContent>
        <DialogActions>
            <Button type='submit' onClick={handleSave} >
            save
          </Button>
          <Button onClick={handleCancel}>
            cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
