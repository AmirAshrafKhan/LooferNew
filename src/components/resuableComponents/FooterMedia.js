import React from "react";
import "./FooterMedia.css";
import { Col, Container, Row } from "react-bootstrap";
import { Divider } from "@mui/material";

const FooterMedia = () => {
  return (
    <>
      <div className="web-footerMount">
        <Container>
          <Row>
            <Col xs={12} className="usefulLinks">
              <a href="#" className="oShopping">
                SHOP FOR
              </a>
              <a href="#"> Explore </a>
              <a href="/men"> Men </a>
              <a href="/women"> Women </a>
              <a href="/kids"> Kids </a>
              <a href="#home-furnishing-menu"> Home &amp; Living </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="socialLinks">
              <h4> KEEP IN TOUCH </h4>
              <a href="https://www.facebook.com/myntra" className="icon">
                {/* Add Facebook icon SVG here */}
              </a>
              <a href="https://twitter.com/myntra" className="icon">
                {/* Add Twitter icon SVG here */}
              </a>
              <a href="https://www.instagram.com/myntra" className="icon">
                {/* Add Instagram icon SVG here */}
              </a>
              <a
                href="https://www.youtube.com/user/myntradotcom"
                className="icon"
              >
                {/* Add YouTube icon SVG here */}
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="usefulLinks">
              <h4> CUSTOMER POLICIES </h4>
              <a href="/contactus"> Contact Us </a>
              <a href="/faqs"> FAQ </a>
              <a href="/tac"> T&amp;C </a>
              <a href="/TermsAndCondotion"> Terms Of Use </a>
              <a href="/my/orders"> Track Orders </a>
              <a href="/faqs#shipping"> Shipping </a>
              <a href="/faqs#cancel"> Cancellation </a>
              <a href="/faqs#returns"> Returns </a>
              <a href="/privacypolicy"> Privacy policy </a>
              <a href="/termsofuse#23.%20Grievance%20Officer">
                {" "}
                Grievance Officer{" "}
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="usefulLinks">
              <h4> USEFUL LINKS </h4>
              <a href="http://blog.myntra.com/"> Blog </a>
              <a href="https://careers.myntra.com"> Careers </a>
              <a href="/sitemap"> Site Map </a>
              <a href="/corp-info"> Corporate Information </a>
              <a href="/security/whitehat"> Whitehat </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="lcContainer">
              <p className="lcHeader"> Registered Office Address </p>
              <div className="lcInfoContainer">
                <div className="lcAddress">
                  Buildings Address,
                  <p>H.No. 21, </p>
                  <br />
                  Address and address situated in address Tech Village,
                  <p>Riva Enclave Lal Danth Road, Near Bangali Chuna Bhatti, Bithoria No1, Haldwani, Nainital, </p>
                 
                  Uttarakhand – 263139, India
                  <br />
                </div>
                <div className="lcLegalInfo">
                  {/* <p> CIN: CIN numbers </p> */}
                  <p>
                    Telephone:
                    <a
                      href="tel:+916362042634"
                      className="lcTelephone highlightText"
                    >
                      +91-6362042634
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="copyright">
              <span>© 2023 www.loofers.com.</span>
              <span className="pull-right"> All rights reserved.</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterMedia;
