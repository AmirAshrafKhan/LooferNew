// import React from "react";
// import "./Footer.css";
// import { Col, Container, Row } from "react-bootstrap";
// import { Divider } from "@mui/material";

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         <Row>
//           <Col md={12} className="online-shopping">
//             <h6 className="other-info-heading">
//               ONLINE SHOPPING MADE EASY AT MYNTRA
//             </h6>
//             <p className="other-info-para-content">
//               If you would like to experience the best of online shopping for
//               men, women and kids in India, you are at the right place. Myntra
//               is the ultimate destination for fashion and lifestyle, being host
//               to a wide array of merchandise including clothing, footwear,
//               accessories, jewellery, personal care products and more. It is
//               time to redefine your style statement with our treasure-trove of
//               trendy items. Our online store brings you the latest in designer
//               products straight out of fashion houses. You can shop online at
//               Myntra from the comfort of your home and get your favourites
//               delivered right to your doorstep.
//             </p>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={12} className="myntra-app">
//             <h6 className="other-info-heading">MYNTRA APP</h6>
//             <p className="other-info-para-content">
//               Myntra, India's no. 1 online fashion destination justifies its
//               fashion relevance by bringing something new and chic to the table
//               on the daily. Fashion trends seem to change at lightning speed,
//               yet the Myntra shopping app has managed to keep up without any
//               hiccups. In addition, Myntra has vowed to serve customers to the
//               best of its ability by introducing its first-ever loyalty program,
//               The Myntra Insider. Gain access to priority delivery, early sales,
//               lucrative deals and other special perks on all your shopping with
//               the Myntra app. Download the Myntra app on your Android or IOS
//               device today and experience shopping like never before!
//             </p>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={12} className="history">
//             <h6 className="other-info-heading">HISTORY OF MYNTRA</h6>
//             <div className="other-info-para-content">
//               <p>
//                 Becoming India's no. 1 fashion destination is not an easy feat.
//                 Sincere efforts, digital enhancements and a team of dedicated
//                 personnel with an equally loyal customer base have made Myntra
//                 the online platform that it is today. The original B2B venture
//                 for personalized gifts was conceived in 2007 but transitioned
//                 into a full-fledged ecommerce giant within a span of just a few
//                 years. By 2012, Myntra had introduced 350 Indian and
//                 international brands to its platform, and this has only grown in
//                 number each passing year. Today Myntra sits on top of the online
//                 fashion game with an astounding social media following, a
//                 loyalty program dedicated to its customers, and tempting,
//                 hard-to-say-no-to deals.
//               </p>
//               <br />
//               <p>
//                 The Myntra shopping app came into existence in the year 2015 to
//                 further encourage customers’ shopping sprees. Download the app
//                 on your Android or IOS device this very minute to experience
//                 fashion like never before
//               </p>
//             </div>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={12} className="shop-at-myntra">
//             <h6 className="other-info-heading">
//               SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
//             </h6>
//             <div className="other-info-para-content">
//               <p>
//                 Another reason why Myntra is the best of all online stores is
//                 the complete convenience that it offers. You can view your
//                 favourite brands with price options for different products in
//                 one place. A user-friendly interface will guide you through your
//                 selection process. Comprehensive size charts, product
//                 information and high-resolution images help you make the best
//                 buying decisions. You also have the freedom to choose your
//                 payment options, be it card or cash-on-delivery. The 30-day
//                 returns policy gives you more power as a buyer. Additionally,
//                 the try-and-buy option for select products takes
//                 customer-friendliness to the next level.
//               </p>
//               <br />
//               <p>
//                 Enjoy the hassle-free experience as you shop comfortably from
//                 your home or your workplace. You can also shop for your friends,
//                 family and loved-ones and avail our gift services for special
//                 occasions.
//               </p>
//             </div>
//           </Col>
//         </Row>

//         <div className="footer-container">
//           <Container>
//             <Row>
//               <Col md={3} className="online-shopping">
//                 <h6 className="content-heading">ONLINE SHOPPING</h6>
//                 <div className="content-box">
//                   <br />
//                   <p>Men</p>
//                   <p>Women</p>
//                   <p>Kids</p>
//                   <p>Home & Living</p>
//                   <p>Beauty</p>
//                   <p>Gift Cards</p>
//                   <p>Myntra Insider</p>
//                 </div>
//               </Col>

//               <Col md={2} className="customer-policies">
//                 <h6 className="content-heading">CUSTOMER POLICIES</h6>
//                 <div className="content-box">
//                   <br />
//                   <p>Contact Us</p>
//                   <p>FAQ</p>
//                   <p>T&C</p>
//                   <p>Terms Of Use</p>
//                   <p>Track Orders</p>
//                   <p>Shipping</p>
//                   <p>Cancellation</p>
//                   <p>Returns</p>
//                   <p>Privacy policy</p>
//                   <p>Grievance Officer</p>
//                 </div>
//               </Col>

//               <Col md={2} className="app">
//                 <h6 className="content-heading">
//                   EXPERIENCE MYNTRA APP ON MOBILE
//                 </h6>
//                 <div className="download-button">
//                   <div className="Google-play">
//                     {/* Add Google Play image */}
//                   </div>
//                   <div className="App-Store">{/* Add App Store image */}</div>
//                 </div>
//                 <br />
//                 <div className="links-container">
//                   <h6 className="content-heading">KEEP IN TOUCH</h6>
//                   <div className="social-links">
//                     <span className="fb-icon">{/* Add Facebook icon */}</span>
//                     <span className="tw-icon">{/* Add Twitter icon */}</span>
//                     <span className="yt-icon">{/* Add YouTube icon */}</span>
//                     <span className="ig-icon">{/* Add Instagram icon */}</span>
//                   </div>
//                 </div>
//               </Col>

//               <Col md={2}>
//                 <div className="customer-satisfaction">
//                   <strong className="original">100% ORIGINAL</strong> guarantee{" "}
//                   <br />
//                   for all products at myntra.com
//                 </div>
//                 <div>
//                   <strong className="original">Return within 30 days</strong> of{" "}
//                   <br />
//                   receiving your order
//                 </div>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={12} className="popular-searches">
//                 <br />
//                 <p className="para-content">
//                   {/* Add your popular searches content here */}
//                 </p>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={12} className="copyright-container">
//                 <div>In case of any concern, Contact Us</div>
//                 <div style={{ color: "1a1aff" }}>
//                   © 2023 <a href="#">www.Loofer.com</a> All rights reserved.
//                 </div>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={6} className="office-address">
//                 <h6 className="content-heading">Registered Office Address</h6>
//                 <div
//                   className="office-address-content"
//                   style={{ fontSize: "10px" }}
//                 >
//                   <br />
//                   <p>H.No. 21,</p>
//                   <p>Riva Enclave Lal Danth Road, Near Bangali</p>
//                   <p>Outer Ring Road,</p>
//                   <p>Chuna Bhatti,</p>
//                   <p> Bithoria No1,</p>
//                   <p> Haldwani,</p>
//                   <p> Nainital, Uttarakhand,263139,</p>
//                 </div>
//               </Col>
//             </Row>
//             <Divider className="horizontal-line" />

//             {/* <Row>
//   <Col md={12} className="online-shopping">
//     <h6 className="other-info-heading">ONLINE SHOPPING MADE EASY AT MYNTRA</h6>
//     <p className="other-info-para-content">
//       If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
//     </p>
//   </Col>
// </Row>

// <Row>
//   <Col md={12} className="myntra-app">
//     <h6 className="other-info-heading">MYNTRA APP</h6>
//     <p className="other-info-para-content">
//       Myntra, India's no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!
//     </p>
//   </Col>
// </Row>

// <Row>
//   <Col md={12} className="history">
//     <h6 className="other-info-heading">HISTORY OF MYNTRA</h6>
//     <div className="other-info-para-content">
//       <p>
//         Becoming India's no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
//       </p>
//       <br/>
//       <p>
//         The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
//       </p>
//     </div>
//   </Col>
// </Row>

// <Row>
//   <Col md={12} className="shop-at-myntra">
//     <h6 className="other-info-heading">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h6>
//     <div className="other-info-para-content">
//       <p>
//         Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
//       </p>
//       <br/>
//       <p>
//         Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
//       </p>
//     </div>
//   </Col>
// </Row> */}
//           </Container>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import { Fragment } from "react";
import gpays from "../../assets/images/gpay.png";
import appstore from "../../assets/images/appstore.png";
import orgg from "../../assets/images/orgg.png";
import ret from "../../assets/images/ret.png";
import "./Footer.css";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TermsAndCondition from "../../pages/TermsAndCondition";
import Returns from "../../pages/Returns";
import Cancellation from "../../pages/Cancellation";
import {useNavigate} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
const navigate = useNavigate()
  const handelRoute = ( link)=>{
    navigate(link)
  }


  return (
    <>
      {window.screen.width > 1024 ? (
        <Fragment>
          <div className="footer-container">
          <div
            className="w-10/12 mx-auto desktop-genericInfo"
            style={{ display: "flex" }}
          >
            <div class="shopLinks" data-reactid="85">
              <p class="gInfoTitle" data-reactid="86">
                <a onClick={(e)=> {e.preventDefault(); handelRoute("/?src=onlineShopping")}} data-reactid="87">
                  {" "}
                  ONLINE SHOPPING{" "}
                </a>
              </p>
              <a onClick={(e)=> {e.preventDefault(); handelRoute("/men")}} data-reactid="88">
                Men
              </a>
              <a  onClick={(e)=> {e.preventDefault(); handelRoute("/women")}} data-reactid="92">
                Women
              </a>
              <a  onClick={(e)=> {e.preventDefault(); handelRoute("/kids")}} data-reactid="96">
                Kids
              </a>
              <a  onClick={(e)=> {e.preventDefault(); handelRoute("/home-living")}} data-reactid="100">
                Home &amp; Living
              </a>
              <a  onClick={(e)=> {e.preventDefault(); handelRoute("/personal-care")}} data-reactid="104">
                Beauty
              </a>
              <a  onClick={(e)=> {e.preventDefault(); handelRoute("/mygiftvocher")}} data-reactid="108">
                Gift Cards
              </a>
              <a  onClick={(e)=> {e.preventDefault(); handelRoute("/Looferinsider?cache=false")}} data-reactid="109">
                Loofer Insider
              </a>
              <p class="desktop-gInfoTitle" data-reactid="110">
                {" "}
                USEFUL LINKS{" "}
              </p>
              <a data-refreshpage="true" href="#" data-reactid="111">
                Blog
              </a>
              <a data-refreshpage="true" href="#" data-reactid="115">
                Careers
              </a>
              <a data-refreshpage="true"  onClick={(e)=> {e.preventDefault(); handelRoute("/sitemap")}} data-reactid="119">
                Site Map{" "}
              </a>
              <a data-refreshpage="true" onClick={(e)=> {e.preventDefault(); handelRoute("/corp-info")}} data-reactid="123">
                Corporate Information{" "}
              </a>
              <a
                data-refreshpage="true"
                
                onClick={(e)=> {e.preventDefault(); handelRoute("/security/whitehat")}}
                data-reactid="127"
              >
                Whitehat
              </a>
            </div>

            <div class="customerPolicies" data-reactid="131">
              <p class="desktop-gInfoTitle" data-reactid="132">
                {" "}
                CUSTOMER POLICIES{" "}
              </p>
              <a data-refreshpage="true"    onClick={(e)=> {e.preventDefault(); handelRoute("/contactus")}} data-reactid="133">
                Contact Us
              </a>
              <a data-refreshpage="true"  onClick={(e)=> {e.preventDefault(); handelRoute("/faq")}} data-reactid="137">
                FAQ
              </a>
              <a data-refreshpage="true" onClick={(e)=> {e.preventDefault(); handelRoute("/tac")}} data-reactid="141">
                T&amp;C
              </a>
              <a data-refreshpage="true" onClick={(e)=> {e.preventDefault(); handelRoute("/payments")}} data-reactid="141">
                Payments
              </a>
              <a
                data-refreshpage="true"
                onClick={(e)=> {e.preventDefault(); handelRoute("/termcondition")}}
                data-reactid="145"
              >
                {" "}
                Terms Of Use
              </a>
              <a data-refreshpage="true"   onClick={(e)=> {e.preventDefault(); handelRoute("/order")}} data-reactid="149">
                Track Orders
              </a>
              <a
                data-refreshpage="true"
                onClick={(e)=> {e.preventDefault(); handelRoute("/membership")}} 
                data-reactid="153"
              >
                Shipping
              </a>
              <a
                data-refreshpage="true"
                onClick={(e)=> {e.preventDefault(); handelRoute("/Cancellation")}} 
                data-reactid="157"
              >
                Cancellation
              </a>
              <a data-refreshpage="true"  onClick={(e)=> {e.preventDefault(); handelRoute("/Returns")}}  data-reactid="161">
                Returns
              </a>
              <a
                data-refreshpage="true"
                onClick={(e)=> {e.preventDefault(); handelRoute("/privacypolicy")}}
                data-reactid="165"
              >
                {" "}
                Privacy policy
              </a>
              <a data-refreshpage="true" data-reactid="169">
                Grievance Officer
              </a>
              <a data-refreshpage="true" data-reactid="169">
                Payments
              </a>
            </div>

            <div class="appExperience" data-reactid="173">
              <p class="gInfoTitle" data-reactid="174">
                {" "}
                EXPERIENCE LOOFER APP ON MOBILE{" "}
              </p>
              <div class="downLinkContainer" data-reactid="175">
                <a href="#" data-reactid="176">
                  <img
                    class="androidDownLink"
                    src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  />
                </a>
                <a href="#" data-reactid="178">
                  <img
                    class="iOSDownLink"
                    src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  />
                </a>
              </div>
              <div class="keepInTouch" data-reactid="180">
                {" "}
                KEEP IN TOUCH{" "}
              </div>
              <a href="#" class="facebook" data-reactid="181">
                <img
                  src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a href="#" class="twitter" data-reactid="183">
                <img
                  src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a href="#" class="youtube" data-reactid="185">
                <img
                  src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
              <a href="#" class="instagram" data-reactid="187">
                <img
                  src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                  style={{
                    width: "25px",
                    height: "25px",
                    position: "relative",
                    top: "1px",
                  }}
                />
              </a>
            </div>

            {/* <div className="appExperience">
       <h1 className='text-sm font-semibold col-span-2' style={{fontSize:'12px',fontWeight:"bold",color:"#282c3f"}}>EXPERIENCE MYNTRA APP ON MOBILE</h1>
        <div className='grid grid-cols-2 gap-4 pt-6 w-[70%]'>
          <img src={gpays} alt="" width={150}/>
          <img src={appstore} alt="" width={130}/>
        </div>
        <h1 className='text-sm font-semibold col-span-2 mt-6' style={{fontSize:'12px',fontWeight:"bold",color:"#282c3f",marginTop:"20px"}}>KEEP IN TOUCH</h1>
        <br />
        <div className='flex'>
        <span className='text-2xl text-[grey] mr-4'><AiFillFacebook/></span>
        <span className='text-2xl text-[grey] mr-4'><ImTwitter/></span>
        <span className='text-2xl text-[grey] mr-4'><AiFillYoutube/></span>
        <span className='text-2xl text-[grey] mr-4'><ImInstagram/></span>
        </div>

       </div> */}

            <div className="col-span-4 promises">
              <div className="grid grid-cols-6 ">
                <div className="col-span-1">
                  <img
                    src={orgg}
                    alt=""
                    className="w-14"
                    width={48}
                    height={49}
                  />
                </div>
                <div className="col-span-5">
                  <span className="font-semibold">100% ORIGINAL</span> guarantee{" "}
                  <br />
                  for all products at loofer.com
                </div>
              </div>
              <br />
              <div className="grid grid-cols-6 ">
                <div className="col-span-1">
                  <img
                    src={ret}
                    alt=""
                    className="w-12"
                    width={48}
                    height={49}
                  />
                </div>
                <div className="col-span-5">
                  <span className="font-semibold">Return within 30days</span> of
                  <br />
                  receiving your order
                </div>
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto font1 text-base text-slate-600 pSearchlinks">
            <span className="font-semibold text-black mb-4 mt-4 text-sm">
              POPULAR SEARCHES
            </span>
            <p>
              Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
              Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
              Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops
              | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches |
              Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes |
              Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini |
              Loofer Fashion Show | Lipstick | Saree | Watches | Dresses |
              Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
              Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
            </p>
          </div>
          <div className="relative w-10/12 mx-auto text-slate-600">
            <span className="absolute right-0">
              {" "}
              ©2023 www.Loofer.com. All rights reserved.
            </span>
          </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="w-10/12 mx-auto font1 mt-4">
            <div className="w-full">
              <h1 className=" text-base font-semibold ">SHOP&nbsp;&nbsp;FOR</h1>
              <ul className=" text-sm text-slate-500 pt-2 flex ">
                <li className="mr-2">Men</li>|
                <li className="mr-2 ml-2">Women</li>|
                <li className="mr-2 ml-2">Kids</li>|
                <li className="mr-2 ml-2">Home & Living</li>|
                <li className="mr-2 ml-2">Beauty</li>
              </ul>
            </div>

            <div className="mt-4">
              <h1 className="text-base font-semibold ">
                EXPERIENCE Loofer APP ON MOBILE
              </h1>
              {/* <div className='grid grid-cols-2 gap-4 pt-2 w-[80%]'>
          <img src={g1} alt="" />
          <img src={g2} alt="" />
        </div> */}
              <h1 className="text-base font-semibold mt-4">KEEP IN TOUCH</h1>

              {/* <div className='flex mt-2'>
        <span className='text-3xl text-[grey] mr-4 '><AiFillFacebook/></span>
        <span className='text-3xl text-[grey] mr-4 '><ImTwitter/></span>
        <span className='text-3xl text-[grey] mr-4 '><AiFillYoutube/></span>
        <span className='text-3xl text-[grey] mr-4 '><ImInstagram/></span>
        </div> */}
            </div>

            <div className="mt-4 w-full">
              <h1 className="text-base font-semibold">USEFUL LINKS</h1>
              <div className="text-sm text-slate-500 pt-2 leading-7 w-[100%] overflow-clip">
                <a className="mr-2 leading-7">Contact Us</a>|
                <a className="mr-2 leading-7 ml-2">FAQ</a>|
                <a className="mr-2 leading-7 ml-2">T&C</a>|
                <a className="mr-2 leading-7 ml-2" href={<TermsAndCondition />}>
                  Terms Of Use
                </a>
                |<a className="mr-2 leading-7 ml-2">Track Orders</a>|
                <a className="mr-2 leading-7 ml-2">Shipping</a>|
                <a className="mr-2 leading-7 ml-2" href={<Cancellation />}>
                  Cancellation
                </a>
                |
                <a className="mr-2 leading-7 ml-2" href={<Returns />}>
                  Returns
                </a>
                |<a className="mr-2 leading-7 ml-2">Whitehat</a>|
                <a className="mr-2 leading-7 ml-2">Blog</a>|
                <a className="mr-2 leading-7 ml-2">Careers</a>|
                <a className="mr-2 leading-7 ml-2" href={<PrivacyPolicy />}>
                  Privacy Policy
                </a>
                |<a className="mr-2 leading-7 ml-2">Site Map</a>|
                <a className="mr-2 leading-7 ml-2">Corporate Information</a>
              </div>
            </div>

            <div className="flex mx-auto text-slate-400 mt-4 mb-20">
              <div className=" text-xs float-left">
                {" "}
                © 2023 www.loofer.com All rights reserved
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Footer;
