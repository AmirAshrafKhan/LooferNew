import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Container, Grid, Box } from "@mui/material";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import heart from "../../assets/images/heart.svg";
import { productDetails } from "../../reducers/action";
import { useDispatch, useSelector } from "react-redux";

function ProductCards(props) {
  const [pDetailsCatItem, setpDetailsCatItem] = useState({});
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetailsState = useSelector((state) => state.productDetails);
  const { pDetailsItem, status, error } = productDetailsState;

  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  // useEffect(() => {
  //   console.log(productID, "profileID");

  //   dispatch(productDetails(productID));
  // }, [dispatch]);

  const handleViewProduct = (id) => {
    console.log("festive season", id);
    const prodID = localStorage.setItem("productID", id);
    setTimeout(() => {
      navigate("/productdetail");
    }, 2500);
  };

  var formData = new FormData();

  // const handleAddToCart = (property_id, quantity) => {
  //   formData.append("product_id", property_id);
  //   formData.append("quantity", quantity);

  //   const config = {
  //     method: "POST",
  //     Headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //     body: formData,
  //   };
  //   fetch("https://loofer.ballazza.in/api/add_to_cart", config)
  //     .then((res) => {
  //       console.log("response recieved", res);
  //       if (res.status == 201) {
  //         console.log("test passed");
  //       } else {
  //         console.log("test failed!");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("an error occured", err);
  //     });
  // };

  // async function fetchData(productID) {
  //   console.log("we now know product id", productID);
  //   try {
  //     const response = await fetch(
  //       `https://loofer.bellazza.in/api/single_product/${productID}`
  //     );

  //     var responseData = await response.json();
  //     console.log(responseData, "response");

  //     if (
  //       responseData !== undefined &&
  //       responseData !== "undefined" &&
  //       responseData !== null
  //     ) {
  //       // let datas = responseDate.products;

  //       setpDetailsItem(responseData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function fetchData(productID) {
  //   console.log("we now know product id", productID);
  //   try {
  //     const response = await fetch(
  //       `https://loofer.bellazza.in/api/single_product/${productID}`
  //     );

  //     var responseDate = await response.json();
  //     console.log(responseDate, "response");

  //     if (
  //       responseDate !== undefined &&
  //       responseDate !== "undefined" &&
  //       responseDate !== null
  //     ) {
  //       let datas = responseDate.products;

  //       setpDetailsItem(responseDate);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleAddToCart = (property_id, quantity) => {
    const formData = new FormData();
    formData.append("product_id", property_id);
    formData.append("quantity", quantity);

    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };
    fetch("https://loofer.bellazza.in/api/add_to_cart", config)
      .then((res) => {
        console.log("response received", res);
        if (res.status === 201) {
          console.log("test passed");
        } else {
          console.log("test failed!");
        }
      })
      .catch((err) => {
        console.log("an error occurred", err);
      });
  };
  console.log("test", props);

  useEffect(() => {
    async function fetchData(productID) {
      console.log("we now know product id", productID);
      try {
        const response = await fetch(
          `https://loofer.bellazza.in/api/list-product`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ category_id: productID }),
          }
        );

        var responseDate = await response.json();
        console.log(responseDate.message, "responseproducts");

        if (
          responseDate !== undefined &&
          responseDate !== "undefined" &&
          responseDate !== null
        ) {
          console.log(responseDate, "responsedate");
          setProducts(responseDate.message);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(productID);

    window.scrollTo(0, 0);
  }, [productID]);

  return (
    // <MDBContainer fluid className="my-5">
    //   <MDBRow className="justify-content-center">
    //     <MDBCol md="6">
    //       <MDBCard className="text-black">
    //         {/* <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" /> */}
    //         <MDBCardImage
    //           src={'https://loofer.bellazza.in/assets/uploads/admin/product/'+props.product.features_image}
    //           position="top"
    //           alt="Generic Clothing"
    //         />
    //         <MDBCardBody>
    //           <div className="text-center">
    //             <MDBCardTitle>{props?.product?.name}</MDBCardTitle>
    //             {/* <p className="text-muted mb-4">{props?.product?.description}</p> */}
    //           </div>
    //           <div>
    //             <div style={{ float: "right" }}>
    //               {/* <span>RetailPrice</span> */}
    //               {/* <p style={{textDecoration: 'line-through'}}>₹{props.product.price}</p> */}
    //             </div>
    //             <div className="d-flex justify-content-between">
    //               <span>Price</span>
    //               <span>₹{props.product.price}</span>
    //             </div>
    //           </div>
    //           <div className="d-flex justify-content-between total font-weight-bold mt-4">
    //             <span
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 handleViewProduct();
    //               }}
    //             >
    //               View Details
    //             </span>
    //             <span
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 handleAddToCart(props.product.id, 10);
    //               }}
    //             >
    //               Add to cart
    //             </span>
    //           </div>
    //         </MDBCardBody>
    //       </MDBCard>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      {Array.isArray(products) ? (
        products?.map((i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                style={{
                  backgroundImage: `url(${i.features_image})`,
                  backgroundSize: "cover",
                  height: "350px",
                  // borderRadius: 10,
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleViewProduct(i.id);
                }}
              >
                <Box style={{ textAlign: "end", padding: "10px" }}>
                  <img
                    src={heart}
                    style={{
                      background: "white",
                      borderRadius: 25,
                      padding: 8,
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
              <Box
                // display={'flex'}
                // justifyContent={'space-between'}
                alignItems={"center"}
                style={{ padding: 10 }}
              >
                <Box
                  // display={'flex'}
                  // justifyContent={'space-between'}
                  alignItems={"center"}
                >
                  <span style={{ fontSize: 14, fontWeight: "bold" }}>
                    {/* Hoodies and Sweetshirt */}
                    {i.name}
                  </span>
                  <br />
                  <span style={{ fontSize: 12, color: "grey" }}>
                    {" "}
                    &#8377;{i.price}
                  </span>
                </Box>
                {/* <span>
                  {" "}
                  &#8377;
                  {i.offer_price}
                </span> */}
              </Box>
              {/* <Box
							style={{
								padding: 10,
							}}></Box> */}
            </Grid>
          );
        })
      ) : (
        <div>No Data Found</div>
      )}
    </Grid>
  );
}

export default ProductCards;
