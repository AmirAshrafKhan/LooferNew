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
  "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_1280.jpg",
];
const fandom = [
  "https://media.istockphoto.com/id/1440269204/photo/interior-design-of-a-beautiful-kitchen-with-a-large-island-in-a-modern-new-england-colonial.jpg?s=1024x1024&w=is&k=20&c=rBBs8CtSFMMhibSIPQTo010QIQ6JNzps7QiH7b-lY0s=",
  "https://media.istockphoto.com/id/1442690220/photo/modern-rustic-kitchen-interior-with-a-marble-top-island.jpg?s=1024x1024&w=is&k=20&c=DHwJmhQ-BvcRgXtiuNUV51rON51L1fWh4smE--fp4ns=","https://media.istockphoto.com/id/155429847/photo/beautiful-open-kitchen-with-walnut-hardwood-floors.jpg?s=1024x1024&w=is&k=20&c=QEoNGKiYK8P-nHMGxZDzg4lNqrQTnLg0Eka_Drh3e4M="];
const collect = [
  "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg","https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg","https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg","https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg"];
const top = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
];
const HomeAndLiving = () => {
  // const matches = useMediaQuery(theme.breakpoints.down('md'));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [categoryProducts,setCategoryProducts]=useState([])
  const navigate = useNavigate();
  useEffect(() => {
    // fetchHomapge()
    console.log("hello");
    // var storageData=localStorage.getItem("category_list");
    // setCategoryProducts(JSON.parse(storageData));
    // console.log("xxxxxx",categoryProducts)
    let data = 
      [
        {
          id: 6,
          name: "shirts",
          slug: "",
          description: null,
          parent: null,
          image_url:
            "https://media.istockphoto.com/id/1126450282/photo/green-lemon-yellow-sofa-with-pillow-soft-lemon-couch-modern-divan-on-isolated-background.jpg?s=1024x1024&w=is&k=20&c=AmagFiKL0B22Jd-mSvBwIhTC8rvVTueISVsGhbl7HQ0=",
        },
        {
          id: 7,
          name: "Boots for efdsad",
          slug: "",
          description: null,
          parent: null,
          image_url:
            "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
        },
        {
          id: 8,
          name: "Jeans",
          slug: "",
          description: null,
          parent: null,
          image_url:
            "https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_1280.jpg    ",
        },
        {
          id: 9,
          name: "Denim",
          slug: "",
          description: null,
          parent: null,
          image_url:
            "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
        },
        {
          id: 10,
          name: "Cutton",
          slug: "",
          description: null,
          parent: null,
          image_url:
            "https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_1280.jpg ",
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
            "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
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
"https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg" ,
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
            "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
        },
      ]
    ;
    localStorage.setItem("category_list",JSON.stringify(data));


	setCategoryProducts(JSON.parse(localStorage.getItem("category_list")))

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
		
        <Grid container spacing={2}>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
          {categoryProducts.map((category, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <img
			  	onClick={(e)=>{e.preventDefault();
					handleImageClick()
					console.log("clicked!")}}
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

export default HomeAndLiving;
