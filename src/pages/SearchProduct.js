import React, { useEffect } from "react";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import { Box, Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import SimilarProduct from "../components/resuableComponents/SimilarProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, product } from "../reducers/homeProductSlice";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { getProductByCategory } from "../reducers/action";
import FooterMedia from "../components/resuableComponents/FooterMedia";
import { ProductCard, UserCard } from "react-ui-cards";
import ProductCards from "../components/resuableComponents/ProductCards";
import SearchProductsCards from "../components/resuableComponents/SearchProductsCards";
import { searchProduct } from "../reducers/action";

const SearchProduct = () => {
  const theme = useTheme();
  const [productItems, setProductItems] = useState([
    [
      {
        id: 6,
        name: "shirts",
        slug: "",
        description: null,
        parent: null,
        image_url: "https://loofer.bellazza.in/assets/uploads/admin/categories",
      },
      {
        id: 7,
        name: "Boots for efdsad",
        slug: "",
        description: null,
        parent: null,
        image_url: "https://loofer.bellazza.in/assets/uploads/admin/categories",
      },
      {
        id: 8,
        name: "Jeans",
        slug: "",
        description: null,
        parent: null,
        image_url: "https://loofer.bellazza.in/assets/uploads/admin/categories",
      },
      {
        id: 9,
        name: "Denim",
        slug: "",
        description: null,
        parent: null,
        image_url: "https://loofer.bellazza.in/assets/uploads/admin/categories",
      },
      {
        id: 10,
        name: "Cutton",
        slug: "",
        description: null,
        parent: null,
        image_url: "https://loofer.bellazza.in/assets/uploads/admin/categories",
      },
      {
        id: 11,
        name: "Cutton3",
        slug: "Cutton3",
        description: "lorem ipsum dummy text",
        parent: {
          id: 8,
          name: "Jeans",
          slug: "",
          description: null,
        },
        image_url:
          "https://loofer.bellazza.in/assets/uploads/admin/categories/04381079-b455-4eb5-a03f-19e3b91a8ae8.jpg",
      },
      {
        id: 13,
        name: "Cutton2",
        slug: "Cutton2",
        description: "lorem ipsum dummy text",
        parent: {
          id: 8,
          name: "Jeans",
          slug: "",
          description: null,
        },
        image_url:
          "https://loofer.bellazza.in/assets/uploads/admin/categories/2abdea02-24b9-43f6-91b5-add203a04eec.jpg",
      },
      {
        id: 14,
        name: "Top Brand",
        slug: "Cutton110",
        description: "lorem ipsum dummy text",
        parent: {
          id: 8,
          name: "Jeans",
          slug: "",
          description: null,
        },
        image_url:
          "https://loofer.bellazza.in/assets/uploads/admin/categories/76485edd-706a-4bbb-acf2-72e916a0d0e4.jpeg",
      },
    ],
  ]);
  const [categoryId, setCategoryId] = useState(null);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();

  const productID = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productByCat = useSelector((state) => state);
  const [products, setproducts] = useState([]);
  const productByCategoryState = useSelector((state) => state.productByCat);
  const { categoryProducts, status, error } = productByCategoryState;

  // const searchProductState = useSelector((state) => state.searchProduct);
  // const { searchItem } = searchProductState;

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://loofer.bellazza.in/api/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: query }), // Assuming 'q' is the parameter expected by the API
        });

        console.log("API Response:", response);

        // Check if the response is OK (status code 200)
        if (response.ok) {
          const data = await response.json();
          setResults(data);
          console.log("Search results in product:", results);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    // if (status === 'loading') {
    // 	return <div>Loading...</div>;
    //   } else if (status === 'succeeded') {
    // 	// Render your data
    // 	return <div>{categoryProducts}</div>;
    //   } else if (status === 'failed') {
    // 	return <div>Error: {error}</div>;
    //   } else {
    // 	return <div>Idle state</div>;
    //   }

    // dispatch(getProductByCategory());
    // console.log(productsData.data.data,'productsData')
    //   data=[{
    //     "data": [
    //         {
    //             "id": 6,
    //             "name": "shirts",
    //             "products": [
    //                 {
    //                     "id": 5,
    //                     "name": "Poco M3"
    //                 },
    //                 {
    //                     "id": 9,
    //                     "name": "mi note 5"
    //                 },
    //                 {
    //                     "id": 10,
    //                     "name": "mi note 5"
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 7,
    //             "name": "Boots for efdsad",
    //             "products": [
    //                 {
    //                     "id": 5,
    //                     "name": "Poco M3"
    //                 },
    //                 {
    //                     "id": 9,
    //                     "name": "mi note 5"
    //                 },
    //                 {
    //                     "id": 10,
    //                     "name": "mi note 5"
    //                 },
    //                 {
    //                     "id": 12,
    //                     "name": "Casual Shirt"
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 8,
    //             "name": "Jeans",
    //             "products": []
    //         },
    //         {
    //             "id": 9,
    //             "name": "Denim",
    //             "products": []
    //         },
    //         {
    //             "id": 10,
    //             "name": "Cutton",
    //             "products": []
    //         },
    //         {
    //             "id": 11,
    //             "name": "Cutton3",
    //             "products": []
    //         },
    //         {
    //             "id": 13,
    //             "name": "Cutton2",
    //             "products": []
    //         },
    //         {
    //             "id": 14,
    //             "name": "Top Brand",
    //             "products": []
    //         }
    //     ]
    // }]

    var category_id = localStorage?.getItem("category_id");
    setCategoryId(category_id);

    async function fetchData(productID) {
      console.log("we now know product id", productID);
      try {
        const response = await fetch(
          // `https://loofer.bellazza.in/api/get_category_product/${productID}`,
          `https://loofer.bellazza.in/api/list-product/${productID}`,
          {
            method: "POST",
          }
        );

        var responseDate = await response.json();
        console.log(responseDate, "response");

        if (
          responseDate !== undefined &&
          responseDate !== "undefined" &&
          responseDate !== null
        ) {
          let datas = responseDate.products;

          setproducts(datas);
        }
      } catch (error) {
        console.log(error);
        setproducts(productItems);
      }
    }

    setTimeout(() => {
      fetchData(productID);
    }, 3000);

    dispatch(searchProduct(query));

    window.scrollTo(0, 0);
  }, []);

  console.log("test set product", products);

  return (
    <>
      <Header />
      <Box>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/users/artists/20230728155727-cp-1.jpg?format=webp&w=1500&dpr=1.3"
          style={{ maxWidth: "100%" }}
        />
      </Box>
      <Box style={{ paddingLeft: 40, paddingTop: 10, paddingRight: 40 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={2}>
            <Box mt={9}>
              <Divider />

              <FormControl style={{ marginTop: 10 }}>
                <span>
                  <b style={{ fontSize: 14 }}>GENDER</b>
                </span>{" "}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="null"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Radio size="small" />}
                    label="Female"
                    onClick={() => {
                      window.location.href = "/product/23";
                    }}
                  />
                  <FormControlLabel
                    value="male"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Radio size="small" />}
                    label="Male"
                    onClick={() => {
                      window.location.href = "/product/1";
                    }}
                  />
                  <FormControlLabel
                    value="other"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Radio size="small" />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <Divider style={{ marginTop: 10, marginBottom: 10 }} />
              <span>
                <b style={{ fontSize: 14 }}>PRODUCTS</b>
              </span>
              <input
                style={{
                  border: "1px solid lightgrey",
                  padding: 10,
                  marginTop: 10,
                  width: "100%",
                  borderRadius: 5,
                }}
                placeholder="Search for Product"
              />
              <Box mt={2}>
                <FormGroup>
                  <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="TopWear"
                    onClick={() => {
                      window.location.href = "/product/37";
                    }}
                  />
                  <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="BottomWear"
                    onClick={() => {
                      window.location.href = "/product/9";
                    }}
                  />

                  {/* <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Pajamas"
                  />
                  <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Pajamas"
                  /> */}
                </FormGroup>
              </Box>
              <Divider style={{ marginTop: 10, marginBottom: 10 }} />
              <b style={{ fontSize: 14 }}>PRICES</b>
              <Box mt={2}>
                <FormGroup>
                  <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Rs. 10000 To Rs. 11000"
                    onClick={() => {
                      window.location.href = "/filterproduct";
                    }}
                  />
                  {/* <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Rs. 1516 To Rs. 1877"
                  />
                  <FormControlLabel
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: 13,
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Rs. 1878 To Rs. 2239"
                  /> */}
                </FormGroup>
              </Box>
              <Divider style={{ marginTop: 10, marginBottom: 10 }} />
              <span>
                <b style={{ fontSize: 14 }}>SIZE</b>
              </span>
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      XXS
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      XS
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      S
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      M
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      L
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      XL
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      XXL
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 12,
                      }}
                    >
                      XXXL
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={10}>
            <span style={{ fontSize: 12, color: "grey" }}>
              Home / Official Naruto Merchandise
            </span>
            <br></br>
            <span>Official Naruto Merchandise -</span>

            <span style={{ color: "rgb(135, 139, 148)" }}> Items</span>
            {/* <ProductCards />
            <SearchProductsCards /> */}
            <SearchProductsCards />

            {/* {productItems.products && productItems.products.length}

            <SimilarProduct />
            {products?.map((prod_count) => {
              return (
                <>
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <ProductCards product={prod_count} />
                    </div>
                  </div>
                </>
              );
            })} */}

            <span></span>
          </Grid>
        </Grid>
      </Box>

      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default SearchProduct;
