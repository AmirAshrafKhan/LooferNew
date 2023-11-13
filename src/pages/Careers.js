import React, { useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import { Box, Button, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import FooterMedia from '../components/resuableComponents/FooterMedia';

const Careers = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Box style={{ background: '#117a7a', padding: 40, textAlign: 'center' }}>
				<p style={{ color: 'white' }}>
					We're a bunch of nerdy, like-minded people who do what they love and
					love what they do. We believe that Mondays should be as fun as
					Fridays.<br></br> We're always on the lookout for souls to join our
					ranks and add to the fun and creativity! If you think you will fit
					just right in, apply right away!
				</p>
				<Button
					style={{
						textTransform: 'capitalize',
						background: '#fff',
						paddingLeft: 30,
						paddingRight: 30,
					}}>
					View Job
				</Button>
			</Box>
			<Container>
				<h2 style={{ color: '#117a7a', textAlign: 'center' }}>
					Our Core Values
				</h2>
				<p>
					One thing that we've tried to keep consistent through all these years
					is our core set of values and beliefs. They have helped us get to
					where we are today, and they guide us as we grow. We inculcate these
					values in everything we do - from the littlest of things to the
					biggest of decisions.
				</p>
				<Grid container spacing={4} style={{ marginTop: 20, marginBottom: 20 }}>
					{Array.from(Array(6)).map((i) => {
						return (
							<Grid item xs={6}>
								<Box
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}>
									<img
										src='https://tss-static-images.gumlet.io/career-revamp/think%20different.svg'
										style={{ height: 100 }}
									/>
									<Box ml={2}>
										<span>Think Different</span>
										<br></br>
										<span>
											Random ideas, new suggestions, and challenging the norm
											are always welcome.
										</span>
									</Box>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Container>
			<Box style={{ background: '#eee', padding: 30 }}>
				<Container>
					<h3 style={{ textAlign: 'center' }}>WHY WORK WITH US ?</h3>
					<Grid container style={{ marginTop: 20, marginBottom: 20 }}>
						{Array.from(Array(4)).map((i) => {
							return (
								<Grid item xs={3}>
									<Box style={{ textAlign: 'center' }}>
										<img src='https://prod-img.thesouledstore.com/public/theSoul/storage/career-revamp/union9.svg?format=webp&w=300&dpr=1.3' />
										<br></br>
										<br></br>
										<span>Competitive Salary</span>
									</Box>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</Box>
			<Container>
				<Box>
					<img src='https://prod-img.thesouledstore.com/public/theSoul/images/695c6db7-fb3d-4912-b6e1-8688bdf3af61.jpg?format=webp&w=1500&dpr=1.3' />
				</Box>
			</Container>
			{matches ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default Careers;
