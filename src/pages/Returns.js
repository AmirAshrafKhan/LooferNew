import React, { useEffect } from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import FooterMedia from "../components/resuableComponents/FooterMedia";

const Returns = () => {
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
            Return Policy for Loofer.in
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Thank you for shopping at Loofer.in. We want you to have the best
              possible online shopping experience, and we understand that
              sometimes returns and exchanges are necessary. This Return Policy
              outlines our guidelines for returning products purchased through
              our e-commerce website. Please read this policy carefully before
              making a purchase, and if you have any questions or concerns,
              don't hesitate to contact our customer service team.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            1. Eligibility for Returns
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              To be eligible for a return, the product must be in its original
              condition, including original packaging, tags, and labels.Products
              that have been used, damaged, or altered in any way may not be
              eligible for return.Certain products, such as personalized or
              perishable items, may not be eligible for return. Please check the
              product description for specific return eligibility.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            2. Timeframe for Returns
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You must initiate a return request within 5-7 days of receiving
              your order. Returns requested after this timeframe may not be
              accepted.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            3. Return Process
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              To request a return: Log in to your Loofer.in account and navigate
              to your order history. Select the order containing the item you
              want to return and follow the instructions for initiating a
              return. Provide the reason for the return and any additional
              information requested. Our customer service team will review your
              return request and provide further instructions, including the
              return shipping address if applicable.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            4. Return Shipping
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You may be responsible for the cost of return shipping, unless the
              return is due to an error on our part (e.g., wrong item shipped or
              product defect). We recommend using a trackable shipping method
              and retaining proof of return for your records. Returns must be
              shipped back within 5-7 days of receiving return authorization.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            5. Refund Process
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Once we receive your returned item and inspect it, we will process
              your refund. Refunds will be issued to the original payment method
              used for the purchase. Please allow 7-10 business days for the
              refund to appear in your account, depending on your payment
              provider.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            6. Exchanges
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              If you wish to exchange an item for a different size, color, or
              style, please follow the return process to return the original
              item and place a new order for the desired item.Exchanges are
              subject to product availability.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            7. Damaged or Defective Items
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>7. Damaged or Defective Items</p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            8. Cancellations
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You may cancel your order before it is shipped. If the order has
              already been shipped, you will need to follow the return process
              upon receipt of the item.{" "}
              <p>
                To cancel an order, log in to your Loofer.in account and follow
                the instructions for canceling orders.
              </p>
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            9. Contact Us
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              If you have any questions or need assistance with the return
              process, please contact our customer service team at {""}
              <b mt={3} style={{ color: "#ed2d2f" }}>
                loofer2024@gmail.com.
              </b>
            </p>

            <p>
              We appreciate your business and strive to provide excellent
              service. Thank you for shopping with Loofer.in!
            </p>
          </Box>
        </Grid>
      </Grid>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default Returns;
