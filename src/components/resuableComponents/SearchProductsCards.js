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
import { fetchData } from "../../reducers/searchProductSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchProductsCards(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const { searchData } = useSelector(fetchData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://loofer.bellazza.in/api/search", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name: query }), // Assuming 'q' is the parameter expected by the API
  //       });

  //       console.log("API Response:", response);

  //       // Check if the response is OK (status code 200)
  //       if (response.ok) {
  //         const data = await response.json();
  //         setResults(data);
  //         console.log("Search results:", results);
  //       } else {
  //         console.error(
  //           "Error fetching data:",
  //           response.status,
  //           response.statusText
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    fetchData();
  });

  const handleSearch = (e) => {
    // Update the 'query' state when the user types in the search input
    setQuery(e.target.value);
    e.preventDefault();
  };

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

  // const searchProductState = useSelector((state) => state.searchProduct);
  // const { searchItem } = searchProductState;

  const handleViewProduct = (id) => {
    console.log("festive season", id);
    const prodID = localStorage.setItem("productID", id);
    setTimeout(() => {
      navigate("/productdetail");
    }, 2500);
  };

  var formData = new FormData();

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

  // useEffect(() => {
  //   async function fetchData(productID) {
  //     console.log("we now know product id", productID);
  //     try {
  //       const response = await fetch(`https://loofer.bellazza.in/api/search`, {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name: query }),
  //       });

  //       var responseDate = await response.json();
  //       console.log(responseDate.message, "responseproducts");

  //       if (
  //         responseDate !== undefined &&
  //         responseDate !== "undefined" &&
  //         responseDate !== null
  //       ) {
  //         console.log(responseDate, "responsedate");
  //         setProducts(responseDate.message);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData(productID);

  //   dispatch(searchProduct());

  //   window.scrollTo(0, 0);
  // }, [productID]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchData?.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust based on your API response structure
        ))}
      </ul>
    </div>
  );
}

export default SearchProductsCards;
