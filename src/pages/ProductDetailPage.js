import React, { useState, useEffect } from "react";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import {
  Grid,
  Box,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Arrow from "../assets/images/Iconarrow.svg";
import Carousel from "react-elastic-carousel";
import Arrows from "../assets/images/arrow.png";
import card1 from "../assets/images/card1.jpg";
import heart from "../assets/images/heart.svg";

import { useDispatch, useSelector } from "react-redux";

import SimilarProduct from "../components/resuableComponents/SimilarProduct";
import TopSelling from "../components/resuableComponents/TopSelling";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { addToCart, showCart, addToWishList } from "../reducers/action";
import FooterMedia from "../components/resuableComponents/FooterMedia";
import Form from "react-bootstrap/Form";
import { Select, MenuItem } from "@material-ui/core";

const top = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
];
const ProductDetailPage = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [selectedSize, setselectedSize] = useState("");
  const [selectedSizeID, setselectedSizeID] = useState("");
  const [qty, setQty] = useState(1);

  // var pDetailsItem={};
  const [pDetailsItem, setPDetailsItem] = useState({});
  const [pDetailsCatItem, setpDetailsCatItem] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetailsState = useSelector((state) => state.productDetails);
  // const { pDetailsItem, status, error } = productDetailsState;
  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  var datanew;

  useEffect(() => {
    let token = localStorage.getItem("productID");
    console.log(token, "token in product Details Page");

    fetchData(token);
    fetchCatProData(7);
    window.scrollTo(0, 0);
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  async function fetchData(productID) {
    console.log("we now know product id", productID);
    try {
      const response = await fetch(
        `https://loofer.bellazza.in/api/single_product/${productID}`
      );

      var responseDate = await response.json();
      console.log(responseDate, "response");
      console.log("{data:[responseDate.data]}", { data: [responseDate.data] });
      // setpDetailsItem({data:[responseDate]});
      var datanew = { data: [responseDate?.data] };

      setPDetailsItem(responseDate);

      console.log("pDetailsItem pDetailsItem", responseDate);

      if (responseDate) {
        // let datas = responseDate.products;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCatProData(productID) {
    console.log("we now know product id", productID);
    try {
      const response = await fetch(
        `https://loofer.bellazza.in/api/get_category_product/${productID}`
      );

      var responseDate = await response.json();
      console.log(responseDate, "response123");

      if (
        responseDate !== undefined &&
        responseDate !== "undefined" &&
        responseDate !== null
      ) {
        // let datas = responseDate.products;

        setpDetailsCatItem(responseDate);
        console.log(pDetailsCatItem, "response123 setpDetailsCatItem");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddToCart = (productID) => {
    let token = localStorage.getItem("token");
    console.log(token, "token 123123");
    if (token !== undefined && token !== "undefined" && token !== null) {
      let items = {
        product_id: `${productID}`,
        quantity: qty,
        "product_attributes[]": selectedSizeID || 1,
        _method: "POST",
      };
      dispatch(addToCart(items));
      dispatch(showCart());

      setTimeout(() => {
        window.location.href = "/cart";
      }, 2000);
    } else {
      navigate("/login");
    }
  };

  const handleAddToWishList = (productID) => {
    console.log("add to wish list");
    let token = localStorage.getItem("token");
    console.log(token, "token 123123");
    if (token !== undefined && token !== "undefined" && token !== null) {
      let items = {
        product_id: `${productID}`,
        quantity: qty,
        "product_attributes[]": selectedSizeID || 1,
        _method: "POST",
      };
      dispatch(addToWishList(items));
      dispatch(showCart());

      setTimeout(() => {
        window.location.href = "/mywishlist";
      }, 2000);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Header />
      <Box style={{ marginLeft: 40, marginRight: 40, marginTop: 20 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <Grid container spacing={2}>
              {/* {pDetailsItem?.data &&
                pDetailsItem?.data.map((val) => (*/}
              <Grid item xs={6}>
                {console.log(pDetailsItem, "pDetailsItem")}
                <img
                  src={
                    pDetailsItem.data &&
                    pDetailsItem.data.feature_image &&
                    pDetailsItem.data.feature_image
                  }
                  // src={val.feature_image}
                  style={{ width: "100%", height: "100%" }}
                />
                {/* <img
                  // src={val.feature_image}
                  src={
                    pDetailsItem.data &&
                    pDetailsItem.data.feature_image &&
                    pDetailsItem.data.feature_image
                  }
                  style={{ width: "100%", height: "100%" }}
                /> */}
              </Grid>
              {/* ))}  */}
              <Grid item xs={6}>
                {/* {console.log(pDetailsItem, "pDetailsItem")} */}
                <img
                  src={
                    pDetailsItem.data &&
                    pDetailsItem.data.feature_image &&
                    pDetailsItem.data.feature_image
                  }
                  style={{ width: "100%", height: "100%" }}
                />
                {/* <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Naruto-23-Men-Basketball-Coord-Set--012023_07_04-10-14-30.jpg?format=webp&w=300&dpr=1.3"
                  style={{ width: "100%", height: "100%" }} 
                />*/}
              </Grid>

              {/* {pDetailsItem?.data &&
                pDetailsItem?.data.product_images &&
                pDetailsItem?.data.product_images.length > 0 &&
                pDetailsItem?.data.product_images.map((val) => (
                  <Grid item xs={6}>
                    {console.log(val, "val images")}
                    <img
                      src={val.feature_image}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                ))} */}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <h2>{pDetailsItem?.data?.name}</h2>
            {pDetailsItem?.data && <>{pDetailsItem?.data?.offer_price}</>}
            <br />
            <br />
            <span>Available Sizes</span>
            <Box style={{ display: "flex", marginTop: 10 }}>
              {pDetailsItem?.data?.product_attributes?.map((i, index) => (
                <Box
                  key={i.id}
                  style={{
                    border: "1px solid grey",
                    padding: 10,
                    marginLeft: index === 0 ? 10 : 10,
                    borderRadius: 10,
                    color: selectedSizeID == i.value ? "red" : "",
                  }}
                  onClick={(e) => {
                    console.log("iiiiiiiiiii", selectedSizeID);
                    e.preventDefault();
                    setselectedSize(i?.value);
                    setselectedSizeID(i?.id);
                  }}
                >
                  <span>{i?.value} </span>
                  {selectedSizeID == i.value ? "Checkd" : ""}
                </Box>
              ))}
            </Box>
            {/* <Box style={{ display: "flex", marginTop: 10 }}>
              <Select
                value={selectedSizeID}
                onChange={(e) => {
                  const selectedSizeID = e.target.value;
                  const selectedSize =
                    pDetailsItem?.data?.product_attributes.find(
                      (i) => i.id === selectedSizeID
                    )?.value;
                  setselectedSize(selectedSize);
                  setselectedSizeID(selectedSizeID);
                }}
              >
                {pDetailsItem?.data?.product_attributes?.map((i, index) => (
                  <MenuItem key={i.id} value={i.id}>
                    {i.value}
                  </MenuItem>
                ))}
              </Select>
            </Box> */}

            <Box mt={2}>Selected Size: {selectedSize || "Not selected"}</Box>
            <Box mt={2}>Select Qty.</Box>

            <Box>
              <Form.Select
                aria-label="Select Qty."
                style={{ width: "100px" }}
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              >
                <option>Open this select menu</option>
                <option value="1" selected>
                  Qty. 1
                </option>
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
            </Box>
            <Box mt={2}>
              <Button
                style={{ background: "red", width: "50%", color: "white" }}
                onClick={() =>
                  handleAddToCart(pDetailsItem.data && pDetailsItem.data.id)
                }
              >
                ADD TO CART
              </Button>
              <Button
                style={{ border: "1px solid grey", marginLeft: 10 }}
                onClick={() =>
                  handleAddToWishList(pDetailsItem.data && pDetailsItem.data.id)
                }
              >
                ADD TO WHISTLIST
              </Button>
            </Box>

            <Box
              mt={5}
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid lightgrey",
                padding: 20,
              }}
              onClick={() => (one ? setOne(false) : setOne(true))}
            >
              <span style={{ fontWeight: "bold" }}>Product Details</span>
              <img style={{ cursor: "pointer" }} src={Arrow} />
            </Box>
            {one ? (
              <Box style={{ border: "1px solid lightgrey", padding: 20 }}>
                <span>
                  <b>Material & Care:</b>
                </span>
                <br></br>
                <span>
                  {pDetailsItem.data &&
                    pDetailsItem.data.description &&
                    pDetailsItem.data.description}
                </span>
              </Box>
            ) : (
              ""
            )}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid lightgrey",
                padding: 20,
              }}
              onClick={() => (two ? setTwo(false) : setTwo(true))}
            >
              <span style={{ fontWeight: "bold" }}>Product Description</span>
              <img style={{ cursor: "pointer" }} src={Arrow} />
            </Box>
            {two ? (
              <Box style={{ border: "1px solid lightgrey", padding: 20 }}>
                <span>
                  <b>Material & Care:</b>
                </span>
                <br></br>
                <span>
                  {pDetailsItem.data &&
                    pDetailsItem.data.description &&
                    pDetailsItem.data.description}
                </span>
                <br></br>
              </Box>
            ) : (
              ""
            )}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid lightgrey",
                padding: 20,
              }}
              onClick={() => (three ? setThree(false) : setThree(true))}
            >
              <span style={{ fontWeight: "bold" }}>Artist's Details</span>
              <img style={{ cursor: "pointer" }} src={Arrow} />
            </Box>
            {three ? (
              <Box style={{ border: "1px solid lightgrey", padding: 20 }}>
                <span>
                  <b>Material & Care:</b>
                </span>
                <br></br>
                <span>Premium Heavy Gauge Fabric</span>
                <br></br>
                <span>Premium Heavy Gauge Fabric</span>
                <br></br>
                <span>Premium Heavy Gauge Fabric</span>
                <br></br>
                <span>Premium Heavy Gauge Fabric</span>
              </Box>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Box>

      <Divider style={{ marginBottom: 20 }} />
      <Box style={{ marginLeft: 40, marginRight: 40, marginTop: 20 }}>
        <Box>
          <h3>SIMILAR PRODUCTS</h3>
        </Box>
        <TopSelling images={pDetailsCatItem?.products} />
        {/* <TopSelling */}
      </Box>

      {matches ? <FooterMedia /> : <Footer />}
    </div>
  );
};

export default ProductDetailPage;
