import React, { useEffect } from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import FooterMedia from "../components/resuableComponents/FooterMedia";

const TermsAndCondition = () => {
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
            Terms of Use for Loofer.in
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Welcome to Loofer.in ("Website" or "Site"). These Terms of Use
              outline the terms and conditions that govern your use of our
              e-commerce platform. By accessing or using our Website, you agree
              to comply with these terms. If you do not agree to these terms,
              please do not use our Website.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            1. Acceptance of Terms
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              By using our Website, you acknowledge that you have read,
              understood, and agreed to these Terms of Use.You must be at least
              18 years old to use our Website. If you are under 18, you may only
              use the Website with the involvement of a parent or guardian.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            2. Changes to Terms
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We may update or modify these Terms of Use from time to time. Any
              changes will be effective upon posting on the Website. It is your
              responsibility to review these terms regularly to stay informed of
              any updates.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            3. Account Registration
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              To access certain features of our Website, you may be required to
              create an account. You are responsible for maintaining the
              confidentiality of your account information. You agree to provide
              accurate, current, and complete information during the
              registration process and to update your information as necessary.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            4. Use of Website
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You agree to use our Website for lawful purposes and in compliance
              with these Terms of Use. You may not use the Website for any
              illegal or unauthorized purpose, including, but not limited to,
              violating any applicable laws or regulations. You may not engage
              in any activity that disrupts, interferes with, or harms the
              functioning of the Website or our services.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            5. Product Listings and Purchases
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Product listings on our Website are subject to change without
              notice. All prices listed on the Website are in Indian rupees. By
              placing an order on our Website, you are making an offer to
              purchase the selected products at the listed price. We reserve the
              right to accept or reject your offer. Payment processing is
              handled by secure third-party providers. You agree to provide
              accurate payment information and authorize us to charge the
              specified amount for your order. We reserve the right to cancel or
              refuse orders for any reason, including if the product is out of
              stock, contains an error, or violates our policies.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            6. Intellectual Property
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              All content on our Website, including text, graphics, logos,
              images, videos, and software, is protected by copyright and other
              intellectual property laws. You may not use, reproduce, modify,
              distribute, or create derivative works based on the content of our
              Website without our explicit permission.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            7. Privacy
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Your use of our Website is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your personal
              information.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            8. Termination
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We reserve the right to terminate or suspend your access to the
              Website at our discretion, with or without notice, for any
              violation of these Terms of Use or for any other reason.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            9. Disclaimers
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Our Website is provided "as is" and "as available" without any
              warranties, either express or implied. We do not guarantee that
              our Website will be error-free, uninterrupted, or free from
              viruses or harmful components.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            10. Limitation of Liability
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              To the fullest extent permitted by law, we shall not be liable for
              any direct, indirect, incidental, special, or consequential
              damages resulting from your use of the Website or any products
              purchased through the Website.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            11. Contact Us
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              If you have any questions or concerns about these Terms of Use,
              please contact us at loofer2024@gmail.com Thank you for using
              Loofer.in. We hope you have a pleasant shopping experience!
            </p>
          </Box>
        </Grid>
      </Grid>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default TermsAndCondition;
