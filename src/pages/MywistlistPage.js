import { Grid, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../components/resuableComponents/Footer";
import Header from "../components/resuableComponents/Header";
import LoginForm from "../forms/LoginForm";
import WhislistCard from "../components/resuableComponents/WhislistCard";
import FooterMedia from "../components/resuableComponents/FooterMedia";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showCart } from "../reducers/action";
const MywistlistPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Box style={{ marginTop: 20 }}>
          <span>My Wishlist </span>
        </Box>
        <WhislistCard />
      </Container>
      {/* <Grid container style={{ background: '#e6e7e8', paddingBottom: 50 }}>
				<Grid item xs={4}></Grid>
				<Grid item xs={4}>
					<img
						src='https://www.thesouledstore.com/static/img/wishList-empty-icon.fd2a993.png'
						style={{ width: '100%' }}
					/>
					<h2>Your wishlist is lonely and looking for love.</h2>
					<span>
						Add products to your wishlist, review them anytime and easily move
						to cart.
					</span>
					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							border: '1px solid rgb(20, 140, 141)',
							marginTop: 20,
						}}>
						<Box
							style={{
								width: '100%',
								textAlign: 'center',
								padding: 12,
							}}>
							Continue Shopping
						</Box>
						<Box
							style={{
								background: 'rgb(20, 140, 141)',
								padding: 12,
								width: '100%',
								textAlign: 'center',
								color: 'white',
							}}>
							Login
						</Box>
					</Box>
				</Grid>
				<Grid item xs={4}></Grid>
			</Grid> */}
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default MywistlistPage;
