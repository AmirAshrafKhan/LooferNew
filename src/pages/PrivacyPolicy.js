import React, { useEffect } from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import FooterMedia from "../components/resuableComponents/FooterMedia";

const PrivacyPolicy = () => {
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
            Privacy Policy for Loofer.in
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Welcome to Loofer.in ("Website" or "Site"). This Privacy Policy is
              intended to inform you about how we collect, use, and protect your
              information when you visit our website or use our services. We
              understand the importance of your privacy, and we are committed to
              safeguarding your personal information. By accessing or using our
              Website, you acknowledge that you have read, understood, and
              agreed to the terms of this Privacy Policy.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            1. Changes to Privacy Policy
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We may periodically review and update this Privacy Policy to
              ensure its accuracy and compliance with applicable laws. Any
              revisions will be effective immediately upon being posted on the
              Website. Please review this Privacy Policy regularly to stay
              informed about our data practices.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            2. Types of Information Collected and Uses of Collected Information
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>We collect two types of information:</p>
            <p>
              a. Personally Identifiable Information: This is information that
              can identify you as an individual, such as your name, email
              address, contact details, and other personal data. We collect this
              information when you engage in activities on our Website, such as
              creating an account, making a purchase, submitting content, or
              contacting us. We use this information to provide our services,
              improve our website, personalize your experience, and respond to
              your inquiries.
            </p>
            <p>
              b. Non-Personally Identifiable Information: This type of
              information does not identify you personally and includes data
              like your IP address, browser type, and website usage patterns. We
              use Non-Personally Identifiable Information for troubleshooting,
              analyzing trends, improving our website, and complying with
              applicable laws.
            </p>
            <p></p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            3. Release of Personally Identifiable Information
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              a. Authorized Third Party Service Providers: We may share your
              information with third-party service providers who assist us in
              delivering our services, including email communication, processing
              payments, and website operation.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            4. Release of Non-Personally Identifiable Information
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We may share aggregated demographic information (without
              Personally Identifiable Information) with partners, affiliates,
              and advertisers for marketing and promotional purposes. This
              information helps us tailor advertisements to our audience.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            5. Updating Information
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              You can access and edit your Personally Identifiable Information
              by logging into your account. Please promptly update your
              information if it changes to ensure its accuracy.
            </p>
          </Box>

          <Box mt={4} style={{ color: "#ed2d2f" }}>
            6. Data Tracking
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We use technologies like cookies, pixel tags, and web beacons to
              improve your browsing experience, collect website usage
              information, and analyze user behavior. You can modify your
              browser settings to decline cookies, but this may affect some
              website features.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            7. Security of Information
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We take appropriate measures to protect your Personally
              Identifiable Information, including encryption, secure servers,
              and restricted access. However, please note that no data
              transmission over the internet is entirely secure, and you
              transmit information to us at your own risk.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            8. Privacy Policies of Third Party Websites
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Our Privacy Policy applies only to our website. Other websites you
              visit may have their own privacy policies and practices, so we
              recommend reviewing their policies when navigating to external
              sites.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            9. Advertising
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Ads displayed on our website may be served by advertising partners
              who may use cookies to target advertisements to your interests.
              Our Privacy Policy does not cover third-party advertisers' use of
              cookies.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            10. Google Adsense
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              Some ads on our site may be served by Google. Google uses
              non-personally identifiable information, and you can opt out of
              their ad targeting through their privacy policy.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            11. Miscellaneous Privacy Issues
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              a. Children: Our website is not intended for minors under 18 years
              old. If you are under 18 and wish to use our services, you must do
              so with parental or guardian consent.
            </p>
            <p>
              b. Public Areas: Information you publicly post on our website,
              such as reviews or comments, may be accessible by others and
              appear on other websites or web searches.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            12. Opt-Out of Further Usage of Personal Information
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              If you no longer wish to receive marketing emails or want us to
              remove your Personally Identifiable Information, please contact us
              at{" "}
              <b mt={3} style={{ color: "#ed2d2f" }}>
                loofer2024@gmail.com.
              </b>
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            13. Opt-Out of Non-Personally Identifiable Information Advertising
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              To learn more about opting out of targeted advertising based on
              non-personally identifiable information, please visit loofer.in.
            </p>
          </Box>
          <Box mt={4} style={{ color: "#ed2d2f" }}>
            14. Suspicious Communication
          </Box>
          <Box style={{ color: "#58595b" }}>
            <p>
              We do not conduct contests or request payments via links
              unaffiliated with our website or app. Please exercise caution when
              receiving suspicious phone calls, emails, or messages claiming to
              be from Loofer.in. Contact our official customer care channels if
              you have any concerns.
            </p>
            <p>
              If you have any questions or concerns about our Privacy Policy or
              data practices, please contact us at{" "}
              <b mt={3} style={{ color: "#ed2d2f" }}>
                loofer2024@gmail.com.
              </b>
            </p>
            <p>Thank you for trusting Loofer.in with your privacy.</p>
          </Box>
        </Grid>
      </Grid>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default PrivacyPolicy;
