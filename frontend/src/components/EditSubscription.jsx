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
  useEffect(() => {

      const getSubscriptions = async () => {
        const res = await fetch("http://127.0.0.1:81/subscriptions", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        console.log(res);
        
        const response = await res.json();
        console.log(response);
        setSubscriptions(response);
      }
      getSubscriptions();
  }, [])

  useEffect(() => {
  async function setSelectedSubscriptionId(selectedId){
    setSelectedSubscription(selectedId); 
    const res = await fetch("http://127.0.0.1:81/subscriptions/" + selectedId, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        let row = await res.json();
        console.log(row)
    console.log("subscription id: " + selectedSubscription)
    const [id, name, cost, frequency, company_id] = row
    setSelectedName(name)
    setSelectedCost(cost)
    setSelectedFrequency(frequency)
    setSelectedCompanyId(company_id)
  };
 }, [])

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
            
          <InputLabel id="select-subscription">Subscriptions</InputLabel>
        <Select
      labelId="select-subscription-filled-label"
      id="select-subscription-filled"
      value={subscriptions}
      onChange={(ev) => setSelectedSubscriptionId(ev.target.value)}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {subscriptions.map((subscription) =>
        <MenuItem value={subscription.id}>{subscription.name}</MenuItem>
      )}
    </Select>
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
