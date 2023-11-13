import React, { useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import {
	Box,
	Container,
	Divider,
	Grid,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import FooterMedia from '../components/resuableComponents/FooterMedia';
const Community = () => {
	// const matches = useMediaQuery(theme.breakpoints.down('md'));

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Box>
				<img
					src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/from-the-soul_1.jpg'
					style={{ width: '100%', height: '100%' }}
				/>
			</Box>
			<Container>
				<h2 style={{ textAlign: 'center', color: 'rgba(0,0,0,.8)' }}>
					We at The Souled Store have always believed in giving back to the
					society. As we keep growing and expanding, so does our commitment to
					creating a positive impact.
				</h2>
			</Container>
			<Divider
				style={{
					background: '#ed3031',
					marginTop: 20,
					marginBottom: 20,
					border: '2px solid #ed3031',
				}}
			/>
			<h2 style={{ textAlign: 'center' }}>
				HERE ARE SOME OF OUR LATEST SOCIAL INITIATIVES
			</h2>
			<Box mt={4} mb={5} style={{ textAlign: 'center' }}>
				<span
					style={{
						background: '#ed3031',
						padding: 20,
						color: 'white',
						fontSize: matches ? 15 : 26,
						fontWeight: 'bold',
					}}>
					PROVIDING STRAYS WITH A BETTER LIFE
				</span>
			</Box>
			<h2 style={{ textAlign: 'center', color: '#ed3031', fontWeight: 'bold' }}>
				CAMPAIGN: PAUSE FOR PAWS
			</h2>
			<Box>
				<Grid container style={{ textAlign: 'center', alignItems: 'center' }}>
					<Grid item xs={12} lg={8}>
						<img
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/miscelleneous/Paws_1_l7Pi8IW.jpg?format=webp&w=940&dpr=1.3'
							style={{ width: '100%', height: '100%' }}
						/>
					</Grid>
					<Grid item xs={12} lg={4}>
						<h2 style={{ color: 'rgba(0,0,0,.8)' }}>
							Summer heat gets harsh for stray animals, especially during a
							pandemic and lockdown. Hence, we at The Souled Store have joined
							hands with Welfare of Stray Dogs (WSD) to launch #PauseForPaws -
							to raise funds for giving strays a better life and providing them
							access to clean drinking water.
						</h2>
					</Grid>
				</Grid>
			</Box>
			{matches ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default Community;
