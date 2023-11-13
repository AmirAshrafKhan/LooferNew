import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createAddress, updateAddress } from "../reducers/action";

function AddAddressPopup({ open, onClose, onSave, addressToEdit }) {
  const dispatch = useDispatch();
  const createAddressState = useSelector((state) => state.createAdd);
  const { createAddressItem, status, error } = createAddressState;

  const [address, setAddress] = useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    city: "",
    state: "",
    pin_code: "",
  });
  const [EditBtn, setEdit] = useState(false);

  useEffect(() => {
    // If addressToEdit is provided, populate the form fields with its values
    if (addressToEdit) {
      setEdit(true);
      setAddress(addressToEdit);
    } else {
      // Reset the form when no address is being edited
      setAddress({
        address_line_1: "",
        city: "",
        state: "",
        address_line_2: "",
        address_line_3: "",
        pin_code: "",
      });
    }
  }, [addressToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSave = () => {
    console.log("address", address);
    dispatch(createAddress(address));
    onSave(address);
    onClose();
  };

  const handleUpdate = () => {
    // Append each field from the address object to the FormData
    console.log(JSON.stringify(address), "string fy");
    console.log(address.id, address, "address.id,address");
    let ID = address.id;

    dispatch(updateAddress(address));
    onSave(address);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      {console.log(address, "addressedit edit")}
      <DialogTitle>
        {addressToEdit ? "Edit Address" : "Add New Address"}
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Address Line 1"
          name="address_line_1"
          value={address.address_line_1}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address Line 2"
          name="address_line_2"
          value={address.address_line_2}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address Line 3"
          name="address_line_3"
          value={address.address_line_3}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Country"
          name="country"
          value={address.country}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          value={address.city}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="State"
          name="state"
          value={address.state}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Pin"
          name="pin_code"
          value={address.pin_code}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        {console.log(EditBtn, "EditBtn console.lof")}
        {!EditBtn ? (
          <Button onClick={handleSave} color="primary">
            Add
          </Button>
        ) : (
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default AddAddressPopup;
