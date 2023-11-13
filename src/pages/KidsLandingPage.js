import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import SliderPage from '../components/resuableComponents/SliderPage';
import { Box, useTheme, useMediaQuery, Grid } from '@mui/material';
import CarouselNew from '../components/resuableComponents/CarouselNew';
import CarouselMerchendies from '../components/resuableComponents/CarouselMerchendies';
import FooterMedia from '../components/resuableComponents/FooterMedia';
const slider = [
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mickey-mouse-T-Shirt-merch_Homepage.jpg?format=webp&w=1500&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mickey-mouse-T-Shirt-merch_Homepage.jpg?format=webp&w=1500&dpr=1.3',
];
const carousel = [
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_age-kids73_Z3gcvBr.jpg?format=webp&w=480&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_age-kids73_Z3gcvBr.jpg?format=webp&w=480&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_age-kids73_Z3gcvBr.jpg?format=webp&w=480&dpr=1.3',
];
const shopbyPrice = [
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Price-range-tile-14_ZTdYwVI.jpg?format=webp&w=480&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Price-range-tile-14_ZTdYwVI.jpg?format=webp&w=480&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Price-range-tile-14_ZTdYwVI.jpg?format=webp&w=480&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Price-range-tile-14_ZTdYwVI.jpg?format=webp&w=480&dpr=1.3',
];
const marchandise = [
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
	'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/harry_potter.jpg?format=webp&w=300&dpr=1.3',
];
const KidsLandingPage = () => {
	
	const navigate =useNavigate()
	// const matches = useMediaQuery(theme.breakpoints.down('md'));

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleImageClick = () => {
		// Use navigate to navigate to the root ("/") URL when an image is clicked
		navigate("/product");
	  };


	return (
		<div>
			<Header />
			<SliderPage images={slider} />
			<Box style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
				<Box
					style={{
						marginTop: matches ? 15 : 50,
						marginLeft: matches ? 20 : '',
					}}>
					<h1
						style={{
							textAlign: matches ? '' : 'center',
							fontSize: matches ? 20 : '',
						}}>
						SHOP BY AGE
					</h1>
				</Box>
				<CarouselNew images={carousel} showArrows={false} />
			</Box>
			<Box style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
				<Box
					style={{
						marginTop: matches ? 15 : 50,
						marginLeft: matches ? 20 : '',
					}}>
					<h1
						style={{
							textAlign: matches ? '' : 'center',
							fontSize: matches ? 20 : '',
						}}>
						OFFICIAL MERCHANDISE
					</h1>
				</Box>
				<CarouselMerchendies images={marchandise} />
			</Box>
			<Box style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
				<Box
					style={{
						marginTop: matches ? 15 : 50,
						marginLeft: matches ? 20 : '',
					}}>
					<h1
						style={{
							textAlign: matches ? '' : 'center',
							fontSize: matches ? 20 : '',
						}}>
						SHOP BY PRICE
					</h1>
				</Box>
				<CarouselNew images={shopbyPrice} />
			</Box>
			<Box
				style={{
					padding: matches ? '' : 20,
					marginTop: matches ? 15 : 50,
					marginLeft: matches ? 20 : '',
				}}>
				<h1
					style={{
						textAlign: matches ? '' : 'center',
						fontSize: matches ? 20 : '',
					}}>
					CATEGORY
				</h1>
				<Grid container spacing={2}>
					{Array.from(Array(8)).map((i) => {
						return (
							<Grid item xs={12} lg={3}>
								<img
								onClick={(e)=>{e.preventDefault();
									handleImageClick()}}
									style={{ height: '100%', width: '100%' }}
									src={
										'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_kids-version3.jpg?format=webp&w=360&dpr=1.3'
									}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
			<Box style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
				<Box
					style={{
						marginTop: matches ? 15 : 50,
						marginLeft: matches ? 20 : '',
					}}>
					<h1
						style={{
							textAlign: matches ? '' : 'center',
							fontSize: matches ? 20 : '',
						}}>
						MEMBERSHIP
					</h1>
				</Box>
				<img
					src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Exclusive-Members-Tile_Desktop_1.jpg?format=webp&w=1500&dpr=1.3'
					style={{ maxWidth: '100%' }}
				/>
			</Box>
			{matches ? <FooterMedia/> :<Footer />}

		</div>
	);
};

export default KidsLandingPage;
