import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MDBBtn} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { TextField } from '@mui/material';

export default function EditSubscription(props) {
  const {open, onClose} = props
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState("");
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
        <form method='POST' action={"http://127.0.0.1:81/subscriptions/"+ selectedSubscription}>
        <DialogTitle id="alert-dialog-title">
          {"edit a subscription"}
        </DialogTitle>
        <DialogContent>
     
                <br></br> <br></br>
            <TextField defaultValue={selectedName} id="name" label="Name" name="name" variant="outlined" margin="normal" />
                <br></br>
                <TextField defaultValue={selectedCost} id="cost" label="Cost" name="cost" variant="outlined" margin="normal" />
                <br></br>
                <TextField defaultValue={selectedFrequency} id="frequency" label="Frequency" name="frequency" variant="outlined" margin="normal" />
                <br></br>
                <TextField defaultValue={selectedCompanyId} id="company_id" label="Company_id" name="company_id" variant="outlined" margin="normal" />
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
