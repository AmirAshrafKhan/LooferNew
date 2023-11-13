import React from 'react';
import {
	Grid,
	Box,
	Button,
	Container,
	useMediaQuery,
	useTheme,
} from '@mui/material';

const SlideCard = ({ img, title, title2 }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					height: matches ? '28vh' : '70vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					// backgroundImage: `url(${'https://prod-img.thesouledstore.com/public/theSoul/images/exclusive/exclusive_background_web.jpg'})`,
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
				}}>
				<Grid container>
					<Grid item xs={4}></Grid>
					<Grid item xs={4}>
						<Box style={{ textAlign: 'center' }}>
							<span style={{ fontSize: 72, color: 'white' }}>SAVE BIG</span>
							<br></br>
							{/* <span style={{ background: 'white', padding: 10 }}>
								ON ALL PRODUCT EVERY DAY
							</span> */}
							<h2 style={{ color: 'white' }}>FUN FACTS</h2>
							<Box style={{ border: '1px solid white', padding: 10 }}>
								<h3 style={{ color: 'white' }}>ON ALL PRODUCT EVERY DAY</h3>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
			</Grid>
			{/* <Grid
				item
				xs={6}
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'skyblue',
				}}>
				<Box>
					<h1>Summer Value Pack</h1>
				</Box>
			</Grid>
			<Grid
				item
				xs={6}
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'skyblue',
				}}></Grid> */}
		</Grid>
	);
};
export default SlideCard;
