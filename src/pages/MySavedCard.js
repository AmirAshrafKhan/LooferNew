import React from 'react';
import { Grid, Box, Button } from '@mui/material';
const MySavedCard = () => {
	return (
		<div>
			<span>SAVED CARDS</span>

			<Grid container>
				<Grid item xs={12} lg={4}></Grid>
				<Grid item xs={12} lg={4}>
					<Box style={{ textAlign: 'center' }}>
						<img src='https://prod-img.thesouledstore.com/public/theSoul/images/no-cards.png?format=webp&w=900&dpr=1.3' />
						<h3>SAVE YOUR CREDIT/ DEBIT CARDS</h3>
						<p style={{ fontSize: 12 }}>
							It's convenient to pay with saved cards.
						</p>
						<p style={{ fontSize: 12 }}>
							Your card information will be secure, we use 128-bit encryption
						</p>
						<Button
							style={{
								background: '#117a7a',
								paddingLeft: 40,
								paddingRight: 40,
								textTransform: 'capitalize',
								color: 'white',
							}}>
							ADD CARD
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} lg={4}></Grid>
			</Grid>
		</div>
	);
};

export default MySavedCard;
