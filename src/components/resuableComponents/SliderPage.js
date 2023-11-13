import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlideCard from "./SlideCard";
import Carousel from "react-elastic-carousel";

const SliderPage = ({ images }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
    afterChange: function (index) {
      // if (index + 1 === 3) {
      // 	setInterval(function () {
      // 		dispatch(toggleOnBoard(false));
      // 	}, 3000);
      // }
    },
  };
  const [BannerData, setBannerData] = useState(null);

  const fetchBanner = () => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: {},
    };
    fetch("https://loofer.bellazza.in/api/get_banners", config)
      .then((response) => response.json())
      .then((data) => {
        console.log("data coming", data);
        setBannerData(data);
      });
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  console.log("slider page", BannerData);

  return (
    <>
      {/* <div class="container">
        <img src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/myntraclone/ss1.png" alt=""/>
    </div>
    <div class="section">
	{images.map((i) => (<img src={i} alt=""/>
	))}
    </div> */}
      {/* <Slider {...settings} style={{ overflowX: "hidden" }}>
        {BannerData?.map((imgDetails) => {
			console.log("image ", imgDetails?.image_url)
          return (
			<h1>ABCD</h1>
            // <img
            //   src={imgDetails?.image_url}
            // //   title={imgDetails?.description
			// //   }
            // //   title2="At One Place"
            // />
          );
        })}
      </Slider> */}
      <Carousel showArrows={false} pagination={false}>
        {BannerData?.map((imgDeets) => {
          return <img src={imgDeets?.image_url} height="500px" width="100%" />;
        })}
      </Carousel>
    </>
  );
};
export default SliderPage;
