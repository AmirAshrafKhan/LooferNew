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
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
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
  placeOnlineConfirmOrder,
} from "../reducers/action";
import AddAddressPopup from "./AddAddressPopup";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import FooterMedia from "../components/resuableComponents/FooterMedia";
import { useNavigate, useLocation } from "react-router-dom";
import AddAddress from "./AddAddress";
import {
  createAddress,
  updateAddress,
  removeFromCart,
} from "../reducers/action";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const top = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
];
const CartPage = ({ open, onClose, onSave }) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isColl, setIsColl] = useState(true);
  const [paymentCheck, setPaymentCheck] = useState("");

  const [addresses, setAddresses] = useState([]); // Your array of addresses
  const [addressToEdit, setAddressToEdit] = useState(null);
  const [address, setAddress] = useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    city: "",
    state: "",
    pin_code: "",
    country: "",
    default_status: 1,
  });
  // const location = useLocation();
  // const ID = location.pathname.split("/")[2];

  const [totalPrice, setTotalPrice] = useState(0);
  const [taxCharge, setTaxCharge] = useState(0);
  const [overAllPrice, setoverAllPrice] = useState(0);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [changeTab, setChangeTab] = useState(1);
  const [addressId, setAddressID] = useState(null);

  const showCartState = useSelector((state) => state.showCart);
  const showAddressState = useSelector((state) => state.addressDetails);
  const showCarts = useSelector((state) => state);
  const showAddresses = useSelector((state) => state);
  const [pDetailsItem, setPDetailsItem] = useState({});
  const [pDetailsCatItem, setpDetailsCatItem] = useState({});

  const { showCartItem, status, error, tax } = showCartState;
  const { addressItems } = showAddressState;

  console.log("addressitems:", showAddresses);

  const handleOpenPopup = (address) => {
    if (address) {
      setAddressToEdit(address);
      setSelectedAddressId(address.id);
      setAddress(address);
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
    setAddressToEdit(null);
    handleClose();
    // onSave(address);
    // onClose();
  };
  const handleEdit = () => {
    console.log("address", address);
    dispatch(updateAddress({ ...address, _method: "PUT" }));
    dispatch(showCart());
    dispatch(showAddress());
    handleGetAddress();
    setAddressToEdit(null);
    handleClose();

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
    setAddressToEdit(null);
  };
  useEffect(() => {
    console.log(showCarts, "showCartsshowCarts");
    dispatch(showCart());
    handleGetAddress();
    dispatch(showAddress());

    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    console.log(addressItems, "addressItems");
    // Check if showCartItem is defined and has the cart_items property as an array
    if (showCartItem) {
      // Calculate the total price
      const totalPrice = showCartItem.total_price;
      const taxRate = tax.charge;

      const overAllPrice = totalPrice + taxRate;

      setTotalPrice(totalPrice);
      setTaxCharge(taxRate);
      setoverAllPrice(overAllPrice);
      console.log(`Total Price for All Items: ${totalPrice}`);
    }
  }, [showCartItem]);

  const placeOrder = () => {
    if (paymentCheck == "cod") {
      dispatch(placeConfirmOrder(selectedAddressId));
    } else if (paymentCheck == "online") {
      localStorage.setItem("address_id", selectedAddressId);
      setTimeout(() => {
        dispatch(placeOnlineConfirmOrder(totalPrice));
      }, 1000);
    }

    // dispatch(confirmOrder());
  };
  const handleGetAddress = () => {
    console.log("address", address);
    dispatch(showAddress());
    //   onSave(address);
    //   onClose();
  };
  const handleClose = () => {
    setIsPopupOpen(false);
  };

  // const handleRemoveItem = () => {
  //   dispatch(removeFromCart());
  // };
  const handleRemoveItem = (cartItem) => {
    let token = localStorage.getItem("token");
    console.log(token, "token 123123");
    if (token !== undefined && token !== "undefined" && token !== null) {
      console.log(cartItem.cart_id, "id");
      let items = {
        cart_id: `${cartItem.cart_id}`,
      };
      dispatch(removeFromCart(items));
      dispatch(showCart());

      setTimeout(() => {
        window.location.href = "/cart";
      }, 1000);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />

      {/* {console.log(showCartState,'showCartState')} */}
      {console.log(showCartItem, "showCartItem")}
      <Container style={{ padding: 15 }}>
        <Grid container>
          <Grid item xs={12} lg={4}></Grid>
          <Grid item xs={12} lg={4}>
            <Box>
              <span>
                <b
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => setChangeTab(1)}
                >
                  MY BAG
                  {/*    color: "rgb(51 65 127)", */}
                </b>
                ---------------
                <b
                  style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
                  onClick={() => setChangeTab(2)}
                >
                  ADDRESS
                </b>
                -----------
                <b
                  style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
                  onClick={() => setChangeTab(3)}
                >
                  PAYMENT
                </b>
              </span>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}></Grid>
        </Grid>
      </Container>

      <Divider />
      {changeTab == 1 ? (
        <Container style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid lightgrey",
                  paddingLeft: 20,
                  paddingRight: 20,
                  alignItems: "center",
                }}
              ></Box>
              {/* <AddAddress /> */}
              {showCartItem &&
                showCartItem.cart_items &&
                showCartItem.cart_items.length > 0 &&
                showCartItem.cart_items.map((item) => {
                  const attributes = JSON.parse(item.attributes); // Parse the JSON string
                  const productName = attributes.product_name;
                  const productSize = attributes.size;
                  const productImage = item?.product?.features_image;

                  // {console.log(productImage," productImage productImage")}

                  return (
                    <Box
                      style={{
                        // display: 'flex',
                        // justifyContent: 'space-between',
                        border: "1px solid lightgrey",
                        // paddingLeft: 20,
                        // paddingRight: 20,
                        padding: 20,
                        marginBottom: 20,
                        // alignItems: 'center',
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box style={{ display: "flex" }}>
                          {/* <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691145278_8709860.jpg?format=webp&w=160&dpr=1.3" /> */}
                          <img src={productImage} height={300} width={300} />
                          <Box ml={3}>
                            {/* <span>Captain America: 41</span> */}
                            <span>{productName}</span>
                            <br></br> <br />
                            <div className="row">
                              <div className="col-sm-6 col-md-6">
                                <Form.Select aria-label="Default select example">
                                  <option>Select Size</option>
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                  <option value="XXL">XXL</option>
                                </Form.Select>
                              </div>
                              <div className="col-sm-6 col-md-6">
                                <Form.Select
                                  aria-label="Default select example"
                                  value={item?.quantity}
                                >
                                  {/* value={item?.quantity} */}
                                  <option>Select Quantity</option>
                                  <option value="1">Qty. 1</option>
                                  <option value="2">Qty. 2</option>
                                  <option value="3">Qty. 3</option>
                                  <option value="4">Qty. 4</option>
                                  <option value="5">Qty. 5</option>
                                  <option value="6">Qty. 6</option>
                                  <option value="7">Qty. 7</option>
                                  <option value="8">Qty. 8</option>
                                  <option value="9">Qty. 9</option>
                                  <option value="10">Qty. 10</option>
                                </Form.Select>
                              </div>
                            </div>
                            <span
                              style={{ fontSize: 12, color: "grey" }}
                            ></span>
                          </Box>
                        </Box>
                        <span>₹ {item.price} </span>
                        <br></br>
                        <br></br>
                      </Box>

                      <Divider />
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        mt={1}
                      >
                        <Box></Box>
                        <Box>
                          <Button
                            style={{
                              border: "1px solid lightgrey",
                              marginRight: 30,
                              borderRadius: 12,
                              fontSize: 12,
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "black",
                              fontWeight: "bold",
                            }}
                            // onClick={handleRemoveItem}
                            onClick={() => handleRemoveItem(item)}
                          >
                            Remove
                          </Button>
                          <Button
                            style={{
                              border: "1px solid lightgrey",
                              borderRadius: 12,
                              fontSize: 12,
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            MOVE TO WHISHLIST
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              <Box>
                <span>YOU MAY ALSO LIKE</span>
                <br></br>
                {/* <TopSelling images={top} /> */}
                <CartCarousel images={top} />
              </Box>
              {/* <Divider /> */}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box style={{ padding: 10 }}>
                <span style={{ color: "#58595b", fontSize: 14 }}>
                  Billing Detail
                </span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column", // Set flexDirection to column
                  justifyContent: "space-between",
                  // padding: 10,
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Cart Total:</span>
                  <span> ₹ {totalPrice}</span>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // padding: 10,
                  }}
                >
                  <span>GST:</span>
                  <span> ₹ {taxCharge}</span>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // padding: 10,
                }}
              >
                <span>Shipping Charge</span>
                <span>₹ 0</span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                {/* <span>GST</span>
              <span>₹ 8596</span> */}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // padding: 10,
                }}
              >
                <span>Total Amount</span>
                <span>₹ {overAllPrice}</span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // padding: 10,
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    background: "rgb(51 65 127)",
                    color: "white",
                  }}
                  onClick={() => setChangeTab(2)}
                >
                  Place order
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : (
        ""
      )}

      {changeTab == 2 ? (
        <Container style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid lightgrey",
                  paddingLeft: 20,
                  paddingRight: 20,
                  alignItems: "center",
                }}
              >
                <div>
                  {/* <List>
                {addressItems?.data &&
                  addressItems?.data.map((address) => (
                    <DialogContent
                      // <DialogContent
                      key={address.id}
                      className={
                        selectedAddressId === address.id
                          ? "active-address"
                          : ""
                      }
                    >
                      <ListItemText
                        primary={`${address.address_line_1}, ${address.address_line_2}, ${address.address_line_3} ${address.city}, ${address.state}`}
                      />

                      <Button onClick={() => handleOpenPopup(address)}>
                        Edit
                      </Button>
                      <Button onClick={() => handleDeleteAddress(address.id)}>
                        Delete
                      </Button>
                    </DialogContent>
                  ))}
              </List> */}
                  <span my address></span>

                  {/* <List>
                {addressItems?.data &&
                  addressItems.data.map((address) => (
                    <DialogContent
                      key={address.id}
                      className={
                        selectedAddressId === address.id
                          ? "active-address"
                          : ""
                      }
                    >
                      <ListItemText primary={address.address_line_1} />
                      <ListItemText primary={address.address_line_2} />
                      <ListItemText primary={address.address_line_3} />
                      <ListItemText primary={address.city} />
                      <ListItemText primary={address.state} />
                      <Button onClick={() => handleOpenPopup(address)}>
                        Edit
                      </Button>
                      <Button onClick={() => handleDeleteAddress(address.id)}>
                        Delete
                      </Button>
                    </DialogContent>
                  ))}
              </List> */}
                  {/* <AddAddress /> */}
                  <List>
                    {addressItems?.data &&
                      addressItems?.data.map((address) => (
                        <>
                          <div className="row">
                            <div className="col-sm-4 col-md-4">
                              <DialogContent
                                key={address.id}
                                style={{
                                  width: "300px",
                                  backgroundColor: "lightgrey",
                                }}
                              >
                                {/* <ListItemText primary={address.address_line_1} /> */}
                                {/* <ListItemText primary={address.address_line_2} />
                      <ListItemText primary={address.address_line_3} />
                      <ListItemText primary={address.city} />
                      <ListItemText primary={address.state} /> */}
                                {/* onChange={(event)=>{
                                    event.preventDefault();
                                     if(event.target.checked){
                                        setSelectedAddressId(address.id)
                                            }else{
                                           setSelectedAddressId(null)
                                                   }
          
                                    }} */}
                                <div>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="checkboxId"
                                  >
                                    <Form.Check
                                      type="radio"
                                      label="Select address to continue"
                                      onChange={(event) => {
                                        event.preventDefault();
                                        if (event.target.checked) {
                                          setSelectedAddressId(address.id);
                                        } else {
                                          setSelectedAddressId(null);
                                        }
                                      }}
                                    />
                                  </Form.Group>
                                </div>
                                {address?.address_line_1}{" "}
                                {address?.address_line_2}{" "}
                                {address?.address_line_3} {address?.city}{" "}
                                {address?.state} {address?.country}{" "}
                                {address?.pin_code}
                                <br></br>
                                <Button
                                  onClick={() => handleOpenPopup(address)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() =>
                                    handleDeleteAddress(address.id)
                                  }
                                >
                                  Delete
                                </Button>
                              </DialogContent>
                            </div>
                          </div>
                        </>
                      ))}
                  </List>
                  {/* <AddAddressPopup /> */}
                </div>

                {/* <AddAddress /> */}
                {/* <Button>ADD</Button> */}
                <Button
                  onClick={() => {
                    handleOpenPopup(true);
                    setAddressToEdit(null);
                  }}
                >
                  Add New Address
                </Button>
              </Box>
              {/* <AddAddress /> */}

              <Box>
                <span>YOU MAY ALSO LIKE</span>
                <br></br>
                {/* <TopSelling images={top} /> */}
                <CartCarousel images={top} />
              </Box>
              {/* <Divider /> */}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box style={{ padding: 10 }}>
                <span style={{ color: "#58595b", fontSize: 14 }}>
                  Billing Detail
                </span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <span>Cart Total</span>
                <span>{totalPrice}</span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                {/* <span>GST</span>
            <span>₹ 8596</span> */}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                {/* <span>Shipping Charge</span>
            <span>₹ 8596</span> */}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <span>Total Amount</span>
                <span>₹ {totalPrice}</span>
              </Box>
              <Box>
                <Button
                  style={{
                    width: "100%",
                    background: "rgb(51 65 127)",
                    color: "white",
                  }}
                  onClick={() => setChangeTab(3)}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : (
        ""
      )}

      {changeTab == 3 ? (
        <Container style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid lightgrey",
                  paddingLeft: 20,
                  paddingRight: 20,
                  alignItems: "center",
                }}
              >
                <div>
                  {/* <Card style={{ width: '500px' }}> */}

                  <Card.Body onClick={() => setIsColl(!isColl)}>
                    <Card.Title>Payment Options To Order</Card.Title>
                  </Card.Body>
                  {/* </Card> */}
                  {/* <Button
        
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}
                  <Collapse in={isColl}>
                    <div id="example-collapse-text">
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Pay Online</div>
                          </div>

                          <Form.Check // prettier-ignore
                            type="radio"
                            id={`default-radio`}
                            name="group1"
                            onChange={() => {
                              setPaymentCheck("online");
                            }}
                          />
                        </ListGroup.Item>
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">
                              Cash On Delivery (COD)
                            </div>
                          </div>

                          <Form.Check // prettier-ignore
                            type="radio"
                            id={`default-radio`}
                            name="group1"
                            onChange={() => {
                              setPaymentCheck("cod");
                            }}
                          />
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Collapse>
                  {/* <List>
                {addressItems?.data &&
                  addressItems?.data.map((address) => (
                    <DialogContent
                      // <DialogContent
                      key={address.id}
                      className={
                        selectedAddressId === address.id
                          ? "active-address"
                          : ""
                      }
                    >
                      <ListItemText
                        primary={`${address.address_line_1}, ${address.address_line_2}, ${address.address_line_3} ${address.city}, ${address.state}`}
                      />

                      <Button onClick={() => handleOpenPopup(address)}>
                        Edit
                      </Button>
                      <Button onClick={() => handleDeleteAddress(address.id)}>
                        Delete
                      </Button>
                    </DialogContent>
                  ))}
              </List> */}

                  {/* <AddAddress /> */}
                  {/* <AddAddressPopup /> */}
                </div>

                {/* <AddAddress /> */}
              </Box>
              {/* <AddAddress /> */}

              {/* <Divider /> */}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box style={{ padding: 10 }}>
                <span style={{ color: "#58595b", fontSize: 14 }}>
                  Billing Detail
                </span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <span>Cart Total</span>
                <span>{totalPrice}</span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                {/* <span>GST</span>
            <span>₹ 8596</span> */}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <span>Shipping Charge</span>
                <span>₹ 0</span>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <span>Total Amount</span>
                <span>₹ {totalPrice}</span>
              </Box>
              <Box>
                <Button
                  style={{
                    width: "100%",
                    background: "rgb(51 65 127)",
                    color: "white",
                  }}
                  onClick={placeOrder}
                >
                  PLACE ORDER
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : (
        ""
      )}

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
      {matches ? <FooterMedia /> : <Footer />}

      <Modal show={isPopupOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>ADD ADDRESS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="address_line_1">
              <Form.Label>Address One</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address one"
                value={address.address_line_1}
                onChange={(event) => {
                  console.log("event.target.value", event.target.value);
                  // address.address_line_1= event.target.value
                  setAddress({
                    ...address,
                    address_line_1: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address_line_2">
              <Form.Label>Address Two</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address two"
                value={address.address_line_2}
                onChange={(event) => {
                  setAddress({
                    ...address,
                    address_line_2: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address_line_3">
              <Form.Label>Address Three</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address three"
                value={address.address_line_3}
                onChange={(event) => {
                  setAddress({
                    ...address,
                    address_line_3: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address_line_4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={address.city}
                onChange={(event) => {
                  setAddress({ ...address, city: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address_line_5">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={address.state}
                onChange={(event) => {
                  setAddress({ ...address, state: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address_line_6">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                value={address.country}
                onChange={(event) => {
                  setAddress({ ...address, country: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address_line_7">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pin code"
                value={address.pin_code}
                onChange={(event) => {
                  setAddress({ ...address, pin_code: event.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          {addressToEdit ? (
            <Button
              variant="primary"
              onClick={() => {
                console.log(address);
                if (addressToEdit) {
                  handleEdit();
                } else {
                  handleSave();
                }
              }}
            >
              UPDATE
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                console.log(address);
                if (addressToEdit) {
                  handleEdit();
                } else {
                  handleSave();
                }
              }}
            >
              ADD
            </Button>
          )}
        </Modal.Footer>
      </Modal>
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

export default CartPage;
