import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MDBBtn} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField } from '@mui/material';
import EditSubscription from './EditSubscription';

const res = await fetch("http://127.0.0.1:81/subscriptions");
var subscriptions = await res.json();
console.log("data: "+ JSON.stringify(subscriptions))

export default function SelectSubscription(props) {
  const {open, onClose} = props
  const [selectedId, setSelectedId] = useState ("")
  const [openEditSubscription, setOpenEditSubscription] = useState ("")
  const [fetchedName, setFetchedName] = useState("");
  const [fetchedCost, setFetchedCost] = useState(""); 
  const [fetchedFrequency, setFetchedFrequency] = useState("");
  const [fetchedCompanyId, setFetchedCompanyId] = useState("");
  const [fetchedId, setFetchedId] = useState("");
  
  function handleCancel() {
      onClose()
  };

  function handleClickCancelEdit (){
    setOpenEditSubscription(false)
  };

  async function handleEdit() {
    const res = await fetch("http://127.0.0.1:81/subscriptions/"+selectedId);
    var subscription = await res.json();
    console.log("selected subscription: "+JSON.stringify(subscription))
    const {id, name, cost, frequency, company_id} = subscription[0];
        setFetchedId(id);
        setFetchedName(name);
        setFetchedCost(cost);
        setFetchedFrequency(frequency);
        setFetchedCompanyId(company_id);
        setOpenEditSubscription(true)
  };

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"select a subscription"}
        </DialogTitle>
        <DialogContent>
            
          <InputLabel id="select-subscription-filled-label">Subscriptions</InputLabel>
        <Select
        sx={{ minWidth: 160 }}
      labelId="select-subscription-filled-label"
      id="select-subscription-filled"
      value={selectedId}
      onChange={(ev) => setSelectedId(ev.target.value)}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {subscriptions.map((subscription) =>
        <MenuItem value={subscription.id}>{subscription.name}</MenuItem>
      )}
    </Select>
                
            </DialogContent>
        <DialogActions>
            <Button onClick={handleEdit} >
            edit
          </Button>
          <Button onClick={handleCancel}>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
      <EditSubscription open={openEditSubscription} onClose={handleClickCancelEdit} selectId={selectedId} editName={fetchedName} editCost={fetchedCost} editFrequency={fetchedFrequency} editCompanyId={fetchedCompanyId}/>
    </div>
  );
}
