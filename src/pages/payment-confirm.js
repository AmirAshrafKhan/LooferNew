import {
    Grid,
    Box,
    Container,
    Divider,
    useMediaQuery,
    useTheme,
    TextField,
    DialogContent,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import Footer from "../components/resuableComponents/Footer";
  import Header from "../components/resuableComponents/Header";
  import LoginForm from "../forms/LoginForm";
  import Form from 'react-bootstrap/Form';
  import Badge from 'react-bootstrap/Badge';
  // import { Button } from '';
  // import { Button } from '@mui/material';
  import TopSelling from "../components/resuableComponents/TopSelling";
  import CartCarousel from "../components/resuableComponents/CartCarousel";
  import { useDispatch, useSelector } from "react-redux";
  import {
    deleteAddress,
    placeConfirmOrder,
    showAddress,
    showCart,
    confirmOrder,
    placeOnlineConfirmOrder
  } from "../reducers/action";
  import AddAddressPopup from "./AddAddressPopup";
  import { Button, List, ListItem, ListItemText } from "@mui/material";
  import FooterMedia from "../components/resuableComponents/FooterMedia";
  import { useNavigate, useLocation } from "react-router-dom";
  import AddAddress from "./AddAddress";
  import { createAddress, updateAddress } from "../reducers/action";
  import Modal from 'react-bootstrap/Modal';
  import Collapse from 'react-bootstrap/Collapse';
  import Card from 'react-bootstrap/Card';
  import ListGroup from 'react-bootstrap/ListGroup';
  
  const top = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  ];
  const PaymentConfirmPage = ({ open, onClose, onSave }) => {
    const theme = useTheme();
  
    const matches = useMediaQuery(theme.breakpoints.down("md"));
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isColl, setIsColl] = useState(true);
    const [paymentCheck, setPaymentCheck] = useState('');
  
  
    const [addresses, setAddresses] = useState([]); // Your array of addresses
    const [addressToEdit, setAddressToEdit] = useState(null);
    const [address, setAddress] = useState({
      address_line_1: "",
      address_line_2: "",
      address_line_3: "",
      city: "",
      state: "",
      pin_code: "",
      country:"",
      default_status:1
    });
    // const location = useLocation();
    // const ID = location.pathname.split("/")[2];
  
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [changeTab, setChangeTab] = useState(1);
    const [addressId, setAddressID] = useState(null);
  
  
  
    const showCartState = useSelector((state) => state.showCart);
    const showAddressState = useSelector((state) => state.addressDetails);
    const showCarts = useSelector((state) => state);
    const showAddresses = useSelector((state) => state);
  
  
    const { showCartItem, status, error } = showCartState;
    const { addressItems } = showAddressState;
  
    console.log("addressitems:", showAddresses);
  
    const handleOpenPopup = (address) => {
      if (address) {
        setAddressToEdit(address);
        setSelectedAddressId(address.id);
        setAddress(address)
      } else {
        setAddressToEdit(null); // Clear the addressToEdit when adding a new address
        setSelectedAddressId(null); // Clear the selected address
      }
      setIsPopupOpen(true);
    };
  
    const handleSave = () => {
      console.log("address", address);
      dispatch(createAddress(address));
        dispatch(showCart());
      dispatch(showAddress());
      handleGetAddress();
      setAddressToEdit(null)
      handleClose()
      // onSave(address);
      // onClose();
    };
    const handleEdit = () => {
      console.log("address", address);
      dispatch(updateAddress({...address, "_method":"PUT"}));
      dispatch(showCart());
      dispatch(showAddress());
      handleGetAddress();
      setAddressToEdit(null)
      handleClose()
  
      // onSave(address);
      // onClose();
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddress({ ...address, [name]: value });
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
      dispatch(showCart());
      dispatch(showAddress());
      handleGetAddress();
      setAddressToEdit(null)
    };
    useEffect(() => {
      console.log(showCarts, "showCartsshowCarts");
      dispatch(showCart());
      dispatch(showAddress());
      handleGetAddress();
  
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
      placeOrder()
    }, [showCartItem]);
  
    const placeOrder = () => {
     
        dispatch(placeConfirmOrder(Number(localStorage.getItem('address_id'))))
      
    
   
      // dispatch(confirmOrder());
    };
    const handleGetAddress = () => {
      console.log("address", address);
      dispatch(showAddress());
      //   onSave(address);
      //   onClose();
    };
    const handleClose = ()=>{
      setIsPopupOpen(false)
    }
  
    return (
      <>
        
  
  
        {/* {console.log(showCartState,'showCartState')} */}
        
       
        
        {/* <Grid
                  container
                  style={{
                      background: '#e6e7e8',
                      paddingBottom: 50,
                      paddingTop: 50,
                      paddingLeft: 50,
                      paddingRight: 50,
                  }}>
                  <Grid item xs={12} lg={4}></Grid>
                  <Grid item xs={12} lg={4}>
                      <img src='https://tss-static-images.gumlet.io/emptyCart.png' />
                      <h2>Your shopping cart is empty.</h2>
                      <span>Please add something soon, carts have feelings too.</span>
                      <Box
                          style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              border: '1px solid rgb(20, 140, 141)',
                              marginTop: 20,
                          }}>
                          <Box
                              style={{
                                  width: '100%',
                                  textAlign: 'center',
                                  padding: 12,
                              }}>
                              Continue Shopping
                          </Box>
                          <Box
                              style={{
                                  background: 'rgb(20, 140, 141)',
                                  padding: 12,
                                  width: '100%',
                                  textAlign: 'center',
                                  color: 'white',
                              }}>
                              Login
                          </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={4}></Grid>
              </Grid> */}
       
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
  
  export default PaymentConfirmPage;
  