import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { Box } from "@mui/material";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const TopSelling = ({ images }) => {
  const [topSelling, setTopSelling] = useState([]);
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];
  const navigate = useNavigate();
  const handleViewProduct = (id) => {
    console.log("festive season");
    localStorage.setItem("productID", id);
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setTimeout(() => {
      navigate("/productdetail");
    }, 2500);
  };

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
        console.log(responseDate.message, "response child dtat");

        if (
          responseDate !== undefined &&
          responseDate !== "undefined" &&
          responseDate !== null
        ) {
          console.log(responseDate, "responsedate");
          setTopSelling(responseDate.message);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(productID);

    window.scrollTo(0, 0);
  }, [productID]);

  return (
    <div>
      <Carousel breakPoints={breakPoints} pagination={false} showArrows={false}>
        {topSelling?.map((i) => {
          return (
            <Box
              style={{ width: "90%" }}
              onClick={(e) => {
                e.preventDefault();
                handleViewProduct(i.id);
              }}
            >
              <Box
              // style={{
              //   backgroundImage: `url(${i.features_image})`,

              //   backgroundSize: "cover",
              //   height: "450px",
              //   // borderRadius: 10,
              // }}
              ></Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                style={{ padding: 10 }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                    src={i.features_image}
                  />
                  <span style={{ fontSize: 14, fontWeight: "bold" }}>
                    {i.name}
                  </span>

                  <span style={{ color: "grey" }}>₹ {i.price}</span>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopSelling;
