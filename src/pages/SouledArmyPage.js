import React, { useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import { Box, Button, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import FooterMedia from '../components/resuableComponents/FooterMedia';

const SouledArmyPage = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Header />
			<Box style={{ textAlign: 'center', padding: 20 }}>
				<Button
					style={{
						background: '#117a7a',
						color: 'white',
						paddingLeft: 60,
						paddingRight: 60,
					}}>
					Get Featured
				</Button>
			</Box>
			<Container style={{ marginTop: 20, marginBottom: 50 }}>
				<Grid container spacing={4}>
					{Array.from(Array(30)).map((i) => {
						return (
							<Grid item xs={12} md={6} lg={3}>
								<img
									src='https://prod-img.thesouledstore.com/public/theSoul/fan_images/20221025112057.jpg?h=263&w=263'
									style={{ height: '100%', width: '100%' }}
								/>
								<Box>
									<span style={{ color: '#58595b', fontSize: 14 }}>
										Solids: Lavender
									</span>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Container>
			{matches ? <FooterMedia/> :<Footer />}

		</div>
	);
};

export default SouledArmyPage;
