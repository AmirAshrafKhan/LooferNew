import React from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import SliderPage from '../components/resuableComponents/SliderPage';
import { Container, Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import FooterMedia from '../components/resuableComponents/FooterMedia';
const slider = [
	'https://media.istockphoto.com/id/1369227754/photo/they-love-going-to-the-mall-together.jpg?s=2048x2048&w=is&k=20&c=-N1xRixjAq9JlmMs7INEGYHH5zWdL-GviJt0XRzmtkQ=',
	'https://media.istockphoto.com/id/1369227754/photo/they-love-going-to-the-mall-together.jpg?s=2048x2048&w=is&k=20&c=-N1xRixjAq9JlmMs7INEGYHH5zWdL-GviJt0XRzmtkQ=',
];
const MemberShipPage = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Header />
			<SliderPage images={slider} />
			<Container>
				<Grid container>
					<Grid item xs={4}></Grid>
					<Grid item xs={4}>
						<Box
							style={{
								display: 'flex',
								alignItems: 'center',
							}}>
							<h1 style={{ borderBottom: '2px solid blue' }}>
								MemberShip Benefit
							</h1>
							<img
								style={{ height: 50, marginLeft: 10 }}
								src={
									'https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/Crown-without-border.png?format=webp&w=480&dpr=1.3'
								}
							/>
						</Box>
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
				<Box mt={3}>
					<Grid container spacing={2}>
						{Array.from(Array(4)).map((i) => {
							return (
								<Grid item xs={6}>
									<Box
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
										<img
											style={{ height: 150 }}
											src='https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/icons-01.png?format=webp&w=240&dpr=1.3'
										/>
										<Box>
											<h2>Big Discount</h2>
											<span style={{ color: '#161b24', fontSize: 18 }}>
												Save big on ALL products every day. Why wait for a sale?
											</span>
										</Box>
									</Box>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Container>
			<Box style={{ background: '#f2f2f2', padding: 20, marginTop: 20 }}>
				<Container>
					<h1 style={{ textAlign: 'center' }}>Become a Member</h1>
					<Grid container spacing={2}>
						{Array.from(Array(3)).map((i) => {
							return (
								<Grid item xs={4}>
									<Box
										style={{
											textAlign: 'center',
											border: '2px solid #707070',
											background: 'white',
											boxShadow:
												'0 4px 2.2px rgba(0,0,0,.034), 0 4px 10px rgba(0,0,0,.086), 0 4px 20px rgba(0,0,0,.12)',
											borderRadius: 10,
										}}>
										<Box
											style={{
												background: '#e76a52',
												padding: 8,
											}}>
											<span style={{ color: 'white' }}>Most Popular</span>
										</Box>
										<h2>12 Months</h2>
										<span>₹ 16.5/months</span>
										<Box>
											<h2>₹ 199</h2>
										</Box>
									</Box>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</Box>
			{matches ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default MemberShipPage;
