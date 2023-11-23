import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Divider } from "@mui/material";
// import Arrow from '../../assets/images/Arrow.svg';
import heart from "../../assets/images/heart.svg";
// import Rectangle from '../../assets/images/Rectangle.svg';
import { addToCart, showCart, addToWishList } from "../../reducers/action";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const WhislistCard = () => {
  const [pDetailsItem, setPDetailsItem] = useState({});
  const [pDetailsCatItem, setpDetailsCatItem] = useState({});
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetailsState = useSelector((state) => state.productDetails);
  // const { pDetailsItem, status, error } = productDetailsState;
  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  const handleAddToCart = (productID) => {
    let token = localStorage.getItem("token");
    console.log(token, "token 123123");
    if (token !== undefined && token !== "undefined" && token !== null) {
      let items = {
        product_id: `${productID}`,

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

  useEffect(() => {
    async function fetchData(productID) {
      console.log("we now know product id", productID);
      try {
        const response = await fetch(
          `https://loofer.bellazza.in/api/single_product/${productID}`
        );

        var responseDate = await response.json();
        console.log(responseDate, "response");
        console.log("{data:[responseDate.data]}", {
          data: [responseDate.data],
        });
        // setpDetailsItem({data:[responseDate]});
        var datanew = { data: [responseDate?.data] };

        setPDetailsItem(responseDate);

        console.log("ppppppppDetailsItem pDetailsItem", responseDate);

        if (responseDate) {
          // let datas = responseDate.products;
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(productID);
  }, [productID]);

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

  useEffect(() => {
    async function fetchWishlistData(productID) {
      console.log("we now know product id", productID);
      try {
        const response = await fetch(
          `https://loofer.bellazza.in/api/list-wishlist`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            // body: JSON.stringify({ category_id: productID }),
          }
        );

        var responseDate = await response.json();
        console.log(responseDate.product, "response of wishlist");

        if (
          responseDate !== undefined &&
          responseDate !== "undefined" &&
          responseDate !== null
        ) {
          console.log(responseDate, "responsedate");
          setProducts(responseDate.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchWishlistData(productID);

    window.scrollTo(0, 0);
  }, [productID]);

  const handleRemoveWishList = () => {
    try {
      const response = fetch(`https://loofer.bellazza.in/api/delete-wishlist`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category_id: productID }),
      });

      var responseDate = response;
      // console.log(responseDate.product, "response of wishlist");

      if (
        responseDate !== undefined &&
        responseDate !== "undefined" &&
        responseDate !== null
      ) {
        console.log(responseDate, "responsedate");
        // setProducts(responseDate.data);
        return responseDate;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={2} style={{ marginTop: 20, marginBottom: 50 }}>
      {/* {Array.from(Array(products)).map((product) => { */}

      {Array.isArray(products) ? (
        products?.map((i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box style={{ border: "1px solid lightgrey" }}>
                <Box
                  style={{
                    //   backgroundImage: `url(${"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Naruto-23-Men-Basketball-Coord-Set--012023_07_04-10-14-30.jpg?format=webp&w=300&dpr=1.3"})`,
                    backgroundImage: `url(${i.product.features_image})`,
                    backgroundSize: "cover",
                    height: "350px",
                    // borderRadius: 10,
                  }}
                >
                  <Box
                    style={{
                      textAlign: "end",
                      padding: "10px",
                    }}
                  >
                    <i
                      class="fa fa-close"
                      style={{
                        background: "white",
                        borderRadius: 25,
                        padding: 6,
                        cursor: "pointer",
                      }}
                      // onClick={handleRemoveWishList}
                      onClick={console.log("removed croos")}
                    ></i>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  style={{ padding: 10 }}
                >
                  <Box>
                    <span style={{ fontSize: 14, fontWeight: "bold" }}>
                      {/* Hoodies and Sweetshirt */}
                      {i?.product?.name}
                    </span>
                    <br />
                    <span style={{ fontSize: 12, color: "grey" }}>
                      {/* Jhanvi’s Brand */}₹{i?.product?.price}
                    </span>
                  </Box>
                  {/*  */}
                </Box>
                <Box
                  style={{
                    padding: 10,
                  }}
                >
                  {/* <span>$123.00</span> */}
                </Box>
                <Divider />
                <Box
                  style={{
                    padding: 10,
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#117a7a",
                      fontWeight: "bold",
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleAddToCart(pDetailsItem.data && pDetailsItem.data.id)
                    }
                    // onClick={console.log("addwishlist")}
                  >
                    MOVE TO CART
                  </span>
                </Box>
              </Box>
            </Grid>
          );
        })
      ) : (
        <div>No Data Found</div>
      )}
    </Grid>
  );
};

export default WhislistCard;
