import React, { useEffect } from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import FooterMedia from "../components/resuableComponents/FooterMedia";

const Cancellation = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={10} md={11} sm={11} xs={11} mx="auto">
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            Cancellation Policy for Loofer.in
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              At Loofer.in, we understand that sometimes you may need to cancel
              your order. This Cancellation Policy outlines our guidelines for
              canceling orders placed on our e-commerce website. Please read
              this policy carefully, and if you have any questions or concerns,
              do not hesitate to contact our customer service team.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            1. Eligibility for Cancellation
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You may cancel your order if it meets the following criteria: The
              order has not been shipped or fulfilled. The product is eligible
              for cancellation, as specified in its product description. If your
              order includes multiple items, you may request to cancel specific
              items within the order.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            2. Cancellation Process
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>To request a cancellation:</p>
            <p>
              Log in to your Loofer.in account and navigate to your order
              history. Select the order that you wish to cancel. Follow the
              instructions for canceling the order. Provide a reason for the
              cancellation if prompted.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            3. Cancellation Timeframe
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You must initiate a cancellation request when your order is in
              packed/shipped status, as long as the cancel option is available
              on App/Website/M-site
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            4. Refund Process for Canceled Orders
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You must initiate a cancellation request when your order is in
              packed/shipped status, as long as the cancel option is available
              on App/Website/M-site
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            5. Non-Eligible Products for Cancellation
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Certain products, such as personalized or perishable items, may
              not be eligible for cancellation. Please check the product
              description for specific cancellation eligibility.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            9. Contact Us
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              If you have any questions or need assistance with the cancellation
              process, please contact our customer service team at {""}
              <b mt={3} style={{ color: "#ed2d2f" }}>
                loofer2024@gmail.com.
              </b>
            </p>
          </Box>
        </Grid>
      </Grid>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default Cancellation;
