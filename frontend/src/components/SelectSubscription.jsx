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


export default function SelectSubscription(props) {
  const {open, onClose} = props
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState("");

    function handleRemove() {
      onClose()
  };

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
  })

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleRemove}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          {"delete a subscription"}
        </DialogTitle>
        <DialogContent>
          <InputLabel id="select-subscription">Subscriptions</InputLabel>
        <Select
      labelId="select-subscription-filled-label"
      id="select-subscription-filled"
      value={subscriptions}
      onChange={(ev) => setSelectedSubscription(ev.target.value)}
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
            <Button onClick={handleRemove}>
            remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
