import {
  Grid,
  Box,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import Footer from "../components/resuableComponents/Footer";
import Header from "../components/resuableComponents/Header";
import LoginForm from "../forms/LoginForm";
// import { Button } from '';
// import { Button } from '@mui/material';
import TopSelling from "../components/resuableComponents/TopSelling";
import CartCarousel from "../components/resuableComponents/CartCarousel";
import { useDispatch, useSelector } from "react-redux";
import { createAddress, updateAddress } from "../reducers/action";

import {
  deleteAddress,
  placeConfirmOrder,
  showAddress,
  showCart,
} from "../reducers/action";
import AddAddressPopup from "./AddAddressPopup";

import FooterMedia from "../components/resuableComponents/FooterMedia";
import { useNavigate } from "react-router-dom";

const top = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
];
const AddAddress = ({ open, onClose, onSave }) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    city: "",
    state: "",
  });

  const [formData, setFormData] = useState(
    address || {
      address_line_1: "",
      address_line_2: "",
      address_line_3: "",
      city: "",
      state: "",
    }
  );

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSave = () => {
  //   onSave(formData);
  //   onClose();
  // };

  const [EditBtn, setEdit] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addresses, setAddresses] = useState([]); // Your array of addresses
  const [addressToEdit, setAddressToEdit] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const showCartState = useSelector((state) => state.showCart);
  const showAddressState = useSelector((state) => state.addressDetails);
  const showCarts = useSelector((state) => state);
  const showAddresses = useSelector((state) => state);

  const { showCartItem, status, error } = showCartState;
  const { addressItems } = showAddressState;

  console.log("addressitems:", showAddressState);

  const handleOpenPopup = (address) => {
    if (address) {
      setAddressToEdit(address);
      setSelectedAddressId(address.id);
    } else {
      setAddressToEdit(null); // Clear the addressToEdit when adding a new address
      setSelectedAddressId(null); // Clear the selected address
    }
    setIsPopupOpen(true);
  };

  const handleSaveAddress = (updatedAddress) => {
    if (addressToEdit) {
      // Update the existing address
      const updatedAddresses = addresses.map((address) =>
        address.id === addressToEdit.id ? updatedAddress : address
      );
      setAddresses(updatedAddresses);
    } else {
      // Add a new address
      setAddresses([...addresses, updatedAddress]);
    }
    setIsPopupOpen(false);
  };

  const handleDeleteAddress = (id) => {
    // Implement logic to delete the selected address
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    dispatch(deleteAddress(id));
  };
  useEffect(() => {
    console.log(showCarts, "showCartsshowCarts");
    dispatch(showCart());
    dispatch(showAddress());

    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    console.log(addressItems, "addressItems");
    // Check if showCartItem is defined and has the cart_items property as an array
    if (showCartItem) {
      // Calculate the total price
      const totalPrice = showCartItem.total_price;
      setTotalPrice(totalPrice);
      console.log(`Total Price for All Items: ${totalPrice}`);
    }
  }, [showCartItem]);

  const placeOrder = () => {
    dispatch(placeConfirmOrder());
    // dispatch(confirmOrder());
  };

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
      });
    }
  }, [addressToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setAddress({ ...address, [name]: value });
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("address", address);
    dispatch(createAddress(address));
    // onSave(address);
    // onSave(formData);
    // onClose();
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
  console.log("addres details", addressItems);
  return (
    <>
      {/* {console.log(showCartState,'showCartState')} */}
      {console.log(showCartItem, "showCartItem")}

      <Divider />

      {/* {addressItems?.data &&
        addressItems?.data.map((address) => (
          <Dialog open={open} onClose={onClose}>
            {console.log(address, "addressedit edit")}
            key={address.id}
            <DialogTitle>
              {addressToEdit ? "Edit Address" : "Add New Address"}
            </DialogTitle>
            <DialogContent key={address.id}>
              <TextField
                label="Address Line 1"
                name="address_line_1"
                value={address.address_line_1}
                onChange={handleChange}
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
                // onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Country"
                name="country"
                // value={address.country}
                // onChange={handleChange}
                fullWidth
              />
              <TextField
                label="City"
                name="city"
                // value={address.city}
                // onChange={handleChange}
                fullWidth
              />
              <TextField
                label="State"
                name="state"
                // value={address.country}
                // onChange={handleChange}
                fullWidth
              />
              <TextField
                type="number"
                label="Pin"
                name="pin_code"
                value={address.pin_code}
                // onChange={handleChange}
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
        ))} */}

      <Container maxWidth="sm">
        <Box mt={3}>
          <h1>Address Details</h1>
          {addressItems?.data &&
            addressItems?.data.map((address) => (
              <form key={address.id}>
                {/* {addressItems?.data &&
              addressItems?.map((address) => ( */}
               
                {/* ))} */}
              </form>
            ))}
        </Box>
      </Container>
    </>
  );
};

function AddressDetails({ address }) {
  return (
    <div>
      <h3>Address Details:</h3>
      <p>ID: {address.id}</p>
      <p>Address Line 1: {address.address_line_1}</p>
      <p>City: {address.city}</p>
      <p>State: {address.state}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default AddAddress;
