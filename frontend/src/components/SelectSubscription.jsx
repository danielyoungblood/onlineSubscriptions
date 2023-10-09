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

const res = await fetch("http://127.0.0.1:81/subscriptions");
var subscriptions = await res.json();

export default function SelectSubscription(props) {
  const {open, onClose} = props
  const [selectedId, setSelectedId] = useState ("")

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
        <DialogTitle id="alert-dialog-title">
          {"select a subscription"}
        </DialogTitle>
        <DialogContent>
            
          <InputLabel id="select-subscription">Subscriptions</InputLabel>
        <Select
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
            <Button type='submit' onClick={handleSave} >
            save
          </Button>
          <Button onClick={handleCancel}>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
