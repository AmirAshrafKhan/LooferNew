import React, { useEffect, useState } from "react";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import SliderPage from "../components/resuableComponents/SliderPage";
import FandomSection from "../components/resuableComponents/FandomSection";
import Carousel from "../components/resuableComponents/Carousel";
import Carousel2 from "../components/resuableComponents/Carousel2";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import HomeDrawer from "../components/resuableComponents/HomeDrawer";
import { useNavigate, useLocation } from "react-router-dom";
import CarouselNew from "../components/resuableComponents/CarouselNew";
import Slder from "../components/resuableComponents/Slder";
import TopSelling from "../components/resuableComponents/TopSelling";
import FooterMedia from "../components/resuableComponents/FooterMedia";

const slider = [
  "https://media.istockphoto.com/id/1369227754/photo/they-love-going-to-the-mall-together.jpg?s=2048x2048&w=is&k=20&c=-N1xRixjAq9JlmMs7INEGYHH5zWdL-GviJt0XRzmtkQ=",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom-Naruto_P4C5r6e.jpg?format=webp&w=480&dpr=1.3",
];
const fandom = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom-Naruto_P4C5r6e.jpg?format=webp&w=480&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom-Naruto_P4C5r6e.jpg?format=webp&w=480&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom-Naruto_P4C5r6e.jpg?format=webp&w=480&dpr=1.3",
];
const collect = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0",
];
const top = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/looney-tunes.jpg?format=webp&w=360&dpr=1.3",
];
const LandingPage = () => {
  // useEffect(()=>{

  //   fetchBanner();
  // },[])

  // const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [image, setImage] = useState(null);
  const [description, setDesciption] = useState("");
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [listShopEvent, setListShopEvent] = useState([]);
  const [newcategoryTopList, setNewCategoryTopList] = useState([]);
  const [newcategoryTopChildList, setNewCategoryTopChildList] = useState([]);
  const [men, setMens] = useState([
    "https://media.istockphoto.com/id/1397715908/photo/blank-black-t-shirt-mock-up-with-coat-hanger-isolated-on-white-background-front-and-back-view.webp?s=1024x1024&w=is&k=20&c=J1E8BE_52FgVE0ShZcLyRsz1zQwRy8lJeLJFd5vkMFU=",
    "https://media.istockphoto.com/id/1249420269/photo/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-wall-background-studio.jpg?s=1024x1024&w=is&k=20&c=dGl5O-knYUVph8XmP3u7SLZ9gatc30ECVKc3q1SZsCI=",
    "https://media.istockphoto.com/id/542577988/photo/hipster-wearing-white-blank-t-shirt-with-space-for-your-logo.webp?s=1024x1024&w=is&k=20&c=c4xuigl4EI-8r1_fe9q3Bcc__v1XA5Trvfqm04u0_8Y=",
    "https://media.istockphoto.com/id/1125110782/photo/young-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to-black-t.jpg?s=1024x1024&w=is&k=20&c=34_6_kAqQoLeue146VpaFAfJqbh9ZT7zda0NESBPUgk=",
  ]);

  const [women, setWoMens] = useState([
    "https://media.istockphoto.com/id/1286538907/photo/stylish-blonde-girl-wearing-black-t-shirt-and-glasses-posing-against-street-urban-clothing.webp?s=1024x1024&w=is&k=20&c=evQcHnupuZ1K0nL8etl3KxbJFyntBrywNq3sj9DGtHk=",
    "https://cdn.pixabay.com/photo/2017/08/17/06/51/blogger-2650246_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg",
  ]);

  const [kids, setKids] = useState([
    "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/29/15/24/kid-2185540_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/30/09/18/kids-3362198_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/05/24/12/46/kids-6279080_1280.jpg",
  ]);

  //  const [topWare,setKids]=useState([
  //   "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2017/03/29/15/24/kid-2185540_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2018/04/30/09/18/kids-3362198_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2021/05/24/12/46/kids-6279080_1280.jpg"

  //    ])

  const navigate = useNavigate();

  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  let dataList = [
    {
      id: 6,
      name: "shirts",
      slug: "",
      description: null,
      parent: null,
      image_url:
        "https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=1024x1024&w=is&k=20&c=m_-tKfvNIumZYwW9V_3JO6ulWMPRLhPvXX0gsbJAe58=",
    },
    {
      id: 7,
      name: "Boots for efdsad",
      slug: "",
      description: null,
      parent: null,
      image_url:
        "https://media.istockphoto.com/id/831763830/photo/walk-in-wardrobe.jpg?s=1024x1024&w=is&k=20&c=-VSxW2kkedgZurcqiVxq1DOLpo9A0JLHBksbFKuXETo=",
    },
    {
      id: 8,
      name: "Jeans",
      slug: "",
      description: null,
      parent: null,
      image_url:
        "https://media.istockphoto.com/id/638761832/photo/shirts-hanging-on-cloths-racks.jpg?s=1024x1024&w=is&k=20&c=uLvp-TgaDy-BReLEpg2qyw6T-KdKw59fS8SPbYdtMco=",
    },
    {
      id: 9,
      name: "Denim",
      slug: "",
      description: null,
      parent: null,
      image_url:
        "https://media.istockphoto.com/id/1159743936/photo/baby-clothes-in-shopping-mall.jpg?s=1024x1024&w=is&k=20&c=BsPqihnWB1EEsl63TwExsI9kWkurUXKF3CW_EJE2Eb0=",
    },
    {
      id: 10,
      name: "Cutton",
      slug: "",
      description: null,
      parent: null,
      image_url:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
  ];
  useEffect(() => {
    getCategory();
    // fetchHomapge()
    console.log("hello");
    // var storageData=localStorage.getItem("category_list");
    // setCategoryProducts(JSON.parse(storageData));
    // console.log("xxxxxx",categoryProducts)

    localStorage.setItem("category_list", JSON.stringify(dataList));

    // setCategoryProducts(JSON.parse(localStorage.getItem("category_list")));

    window.scrollTo(0, 0);
  }, []);

  const getCategory = () => {
    // const formData = new FormData();
    // formData.append("image", image);
    // formData.append("description", description);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const configPost = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: {},
    };

    fetch("https://loofer.bellazza.in/api/get_all_category", config)
      .then((response) => response.json())
      .then((res) => {
        console.log("havana oh na na ", res);
        let category = [];
        if (res) {
          res.map((val) => {
            category.push(val);
          });
          setCategoryInfo(category);
          console.log("category info data", categoryInfo);
        } else {
          console.log("failed to resolve");
        }

        console.log("child cat", { res });
      })
      .catch((err) => {
        console.error(err);
        setCategoryInfo(dataList);
      });

    fetch("https://loofer.bellazza.in/api/top_selling_products", config)
      .then((response) => response.json())
      .then((res) => {
        console.log("havana oh na na ", res);
        let category = [];
        if (res) {
          setBestSelling(category.data);
        } else {
          console.log("failed to resolve");
        }

        console.log({ res });
      })
      .catch((err) => {
        console.error(err);
        setCategoryInfo(dataList);
      });

    fetch("https://loofer.bellazza.in/api/list-shop-event", config)
      .then((response) => response.json())
      .then((res) => {
        console.log("list shop event ", res);
        let category = [];
        if (res) {
          setListShopEvent(res?.data);
        } else {
          console.log("failed to resolve");
        }

        console.log({ res });
      })
      .catch((err) => {
        console.error(err);
        setCategoryInfo(dataList);
      });
  };

  const handleImageClick = (name) => {
    // Use navigate to navigate to the root ("/") URL when an image is clicked
    navigate("/product" + name);
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
    <>
      <Header />

      <div className="section" style={{ paddingTop: "31px" }}>
        <SliderPage />
      </div>
      {/* <Slder images={slider} /> */}
      <FandomSection listShopEvent={listShopEvent} />
      <CarouselNew
        images={listShopEvent.reverse()}
        slider={false}
        SliderPage={false}
      />
      {/*  */}
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
          COLLECTIONS
        </h1>
      </Box>
      <CarouselNew images={collect} slider={false} />
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
          Men
        </h1>
        <Grid container spacing={2}></Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {/* <Grid container spacing={2}>
            {categoryProducts.map((category, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(category.name);
                    console.log("clicked!");
                  }}
                  style={{ height: "468px", width: "468px" }}
                  src={
                    category.image_url ||
                    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
                  }
                />

                <h3>{category?.name}</h3>
              </Grid>
            ))}
          </Grid> */}

          {/* <Grid item xs={12} lg={6}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
              }
            />
          </Grid> */}

          <div className="row">
            {men &&
              men.map((man) => {
                return (
                  <>
                    <div className="col-sm-3 col-md-3">
                      <img
                        src={man}
                        width={"100%"}
                        onClick={() => {
                          window.location.href = "/product/1";
                        }}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </Grid>

        {/* women */}
        <h1
          style={{
            textAlign: matches ? "" : "center",
            fontSize: matches ? 20 : "",
          }}
        >
          Women
        </h1>
        <Grid container spacing={2}></Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {/* <Grid container spacing={2}>
            {categoryProducts.map((category, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(category.name);
                    console.log("clicked!");
                  }}
                  style={{ height: "468px", width: "468px" }}
                  src={
                    category.image_url ||
                    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
                  }
                />

                <h3>{category?.name}</h3>
              </Grid>
            ))}
          </Grid> */}

          {/* <Grid item xs={12} lg={6}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
              }
            />
          </Grid> */}

          <div className="row">
            {women &&
              women.map((wo) => {
                return (
                  <>
                    <div className="col-sm-3 col-md-3">
                      <img src={wo} width={"100%"} height={"310px"} />
                    </div>
                  </>
                );
              })}
          </div>
        </Grid>

        {/* Kids */}

        <h1
          style={{
            textAlign: matches ? "" : "center",
            fontSize: matches ? 20 : "",
          }}
        >
          Kids
        </h1>
        <Grid container spacing={2}></Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {/* <Grid container spacing={2}>
            {categoryProducts.map((category, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(category.name);
                    console.log("clicked!");
                  }}
                  style={{ height: "468px", width: "468px" }}
                  src={
                    category.image_url ||
                    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
                  }
                />

                <h3>{category?.name}</h3>
              </Grid>
            ))}
          </Grid> */}

          {/* <Grid item xs={12} lg={6}>
            <img
              style={{ width: "100%" }}
              src={
                "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=768&dpr=1.3"
              }
            />
          </Grid> */}

          <div className="row">
            {kids &&
              kids.map((kid) => {
                return (
                  <>
                    <div className="col-sm-3 col-md-3">
                      <img
                        src={kid}
                        width={"100%"}
                        onClick={() => {
                          window.location.href = "/product/3";
                        }}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
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
        {/* <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Exclusive-Members-Tile_Desktop_1.jpg?format=webp&w=1500&dpr=1.3"
          style={{ maxWidth: "100%" }}
          className="memberImage"
        /> */}
        <Box style={{ maxWidth: "100%", overflow: "hidden" }}>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Exclusive-Members-Tile_Desktop_1.jpg?format=webp&w=1500&dpr=1.3"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default LandingPage;
