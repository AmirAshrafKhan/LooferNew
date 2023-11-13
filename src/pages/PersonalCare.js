import React, { useEffect, useState } from "react";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import SliderPage from "../components/resuableComponents/SliderPage";
import FandomSection from "../components/resuableComponents/FandomSection";
import Carousel from "../components/resuableComponents/Carousel";
import Carousel2 from "../components/resuableComponents/Carousel2";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import HomeDrawer from "../components/resuableComponents/HomeDrawer";
import { useNavigate } from "react-router-dom";
import CarouselNew from "../components/resuableComponents/CarouselNew";
import Slder from "../components/resuableComponents/Slder";
import TopSelling from "../components/resuableComponents/TopSelling";
import FooterMedia from "../components/resuableComponents/FooterMedia";
const slider = [
  "https://cdn.pixabay.com/photo/2018/11/15/02/41/essential-oil-3816410_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/05/24/13/29/olive-oil-1412361_1280.jpg",
];
const fandom = [
  "https://cdn.pixabay.com/photo/2018/02/09/14/55/lips-3141753_1280.jpg",
  "https://media.istockphoto.com/id/1299164489/photo/make-up-palette-and-brushes-professional-eyeshadow-palette.jpg?s=1024x1024&w=is&k=20&c=3jI-B5aOpghUrTKBvweWUxBGH4700bN4XJ1sVrpCo7s=",
  "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  ];
const collect = [
  "https://cdn.pixabay.com/photo/2017/09/13/16/08/cosmetics-2746013_1280.jpg",
  "https://media.istockphoto.com/id/1137542713/photo/various-set-of-professional-makeup-brushes-and-palette-of-colourful-eye-shadows-isolated.jpg?s=1024x1024&w=is&k=20&c=qyYy573ub_OYNG3RTSY1thq-7EN8TiSdwsByWhqhS14=",
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
];
const top = [
  "https://media.istockphoto.com/id/500539376/photo/professional-makeup-palette-with-makeup-brush.jpg?s=1024x1024&w=is&k=20&c=448x0msv-nDk83_C2D-pGEcjYXHUhk0pDt9ODqvYESM=",
  "https://images.unsplash.com/photo-1571256750339-12bbebc768f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1456&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80","https://images.unsplash.com/photo-1609357912334-e96886c0212b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80","https://images.unsplash.com/photo-1573575155376-b5010099301b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"];
const PersonalCare = () => {
  // const matches = useMediaQuery(theme.breakpoints.down('md'));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [categoryProducts, setCategoryProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // fetchHomapge()
    console.log("hello");
    // var storageData=localStorage.getItem("category_list");
    // setCategoryProducts(JSON.parse(storageData));
    // console.log("xxxxxx",categoryProducts)
    let data = [
      {
        id: 6,
        name: "shirts",
        slug: "",
        description: null,
        parent: null,
        image_url:
          "https://plus.unsplash.com/premium_photo-1681420615803-8cc901f5e503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 7,
        name: "Boots for efdsad",
        slug: "",
        description: null,
        parent: null,
        image_url:
          "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 8,
        name: "Jeans",
        slug: "",
        description: null,
        parent: null,
        image_url:
          "https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      },
      {
        id: 9,
        name: "Denim",
        slug: "",
        description: null,
        parent: null,
        image_url:
          "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 10,
        name: "Cutton",
        slug: "",
        description: null,
        parent: null,
        image_url:
          "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
          "https://images.unsplash.com/photo-1567433517180-d3e56cf7f81e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
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
          "https://plus.unsplash.com/premium_photo-1679064286466-6e1ee9d3a44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
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
          "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ];
    localStorage.setItem("category_list", JSON.stringify(data));

    setCategoryProducts(JSON.parse(localStorage.getItem("category_list")));

    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = () => {
    // Use navigate to navigate to the root ("/") URL when an image is clicked
    navigate("/product");
  };

  return (
    <>
      <Header />

      <div className="section" style={{ paddingTop: "31px" }}>
        <SliderPage images={slider} />
      </div>
      {/* <Slder images={slider} /> */}
      <FandomSection />
      <CarouselNew images={fandom} />
      {/*  */}
      <Box
        style={{ marginTop: matches ? 15 : 50, marginLeft: matches ? 20 : "" }}
      >
        <h1
          style={{
            textAlign: matches ? "" : "center",
            fontSize: matches ? 20 : "",
          }}
        >
          COLECTIONS
        </h1>
      </Box>
      <CarouselNew images={collect} />
      <Box
        style={{
          padding: matches ? "" : 20,
          marginTop: matches ? 15 : 50,
          marginLeft: matches ? 20 : "",
        }}
      >
        <h1
          style={{
            textAlign: matches ? "" : "center",
            fontSize: matches ? 20 : "",
          }}
        >
          CATEGORY
        </h1>

        <Grid container spacing={2}></Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            {categoryProducts.map((category, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick();
                    console.log("clicked!");
                  }}
                  style={{ height: "100%", width: "100%" }}
                  src={category.image_url} // Use the appropriate image property from your category data
                />
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} lg={3}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_133_k0TOUbi.jpg?format=webp&w=360&dpr=1.3"
              }
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_2_BW9rBPw.jpg?format=webp&w=360&dpr=1.3"
              }
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_3_au8NsNt.jpg?format=webp&w=360&dpr=1.3"
              }
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_5_ZrWJgRd.jpg?format=webp&w=360&dpr=1.3"
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{ marginTop: matches ? 15 : 50, marginLeft: matches ? 20 : "" }}
      >
        <h1
          style={{
            textAlign: matches ? "" : "center",
            fontSize: matches ? 20 : "",
          }}
        >
          STRAIGHT OUT OF CELEBRITY CLOSETS
        </h1>

        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Hardik_23_Summer-collection_Homepage-Banner_3_RPmon3W.jpg?format=webp&w=1500&dpr=1.3"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Box style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Box
          style={{
            marginTop: matches ? 15 : 50,
            marginLeft: matches ? 20 : "",
          }}
        >
          <h1
            style={{
              textAlign: matches ? "" : "center",
              fontSize: matches ? 20 : "",
            }}
          >
            TOP SELLING
          </h1>
        </Box>
        <TopSelling images={top} />
      </Box>
      <Box style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Box
          style={{
            marginTop: matches ? 15 : 50,
            marginLeft: matches ? 20 : "",
          }}
        >
          <h1
            style={{
              textAlign: matches ? "" : "center",
              fontSize: matches ? 20 : "",
            }}
          >
            MEMBERSHIP
          </h1>
        </Box>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Exclusive-Members-Tile_Desktop_1.jpg?format=webp&w=1500&dpr=1.3"
          style={{ maxWidth: "100%" }}
        />
      </Box>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default PersonalCare;
