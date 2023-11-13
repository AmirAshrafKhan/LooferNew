import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';

const TSSPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<span>MY TSS POINTS</span>
			<Box
				mt={2}
				style={{
					boxShadow: '0 1px 2px 0 rgba(0,0,0,.25)',
					backgroundColor: '#fff',
					padding: '10px 0 20px',
					marginBottom: '10px',
					textAlign: 'justify',
				}}>
				<Box
					style={{
						textAlign: 'center',
						borderBottom: '.5px solid #eaeaec',
						padding: '20px 10px 30px',
					}}>
					<img src='https://tss-static-images.gumlet.io/icons/tss-points.png' />
					<br></br>
					<span>A quick and convenient way to pay and refund</span>
				</Box>
				<Grid container>
					<Grid item xs={6}>
						<Box style={{ textAlign: 'center', padding: 20 }}>
							<img
								src='https://constant.myntassets.com/mymyntra/assets/img/instant-cashback.svg'
								style={{ height: 50 }}
							/>
							<br></br>
							<span>
								<b>INSTANT CHECKOUT</b>
							</span>
							<p style={{ fontSize: 12 }}>One-click easy and fast checkout</p>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box style={{ textAlign: 'center', padding: 20 }}>
							<img
								src='https://constant.myntassets.com/mymyntra/assets/img/instant-cashback.svg'
								style={{ height: 50 }}
							/>
							<br></br>
							<span>
								<b>INSTANT CHECKOUT</b>
							</span>
							<p style={{ fontSize: 12 }}>One-click easy and fast checkout</p>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box
				mt={2}
				style={{
					boxShadow: '0 1px 2px 0 rgba(0,0,0,.25)',
					backgroundColor: '#fff',
					padding: '10px 0 20px',
					marginBottom: '10px',
					textAlign: 'center',
				}}>
				<h3>TOTAL TSS POINTS</h3>
				<h1>0.00</h1>
			</Box>
			<Box
				mt={2}
				style={{
					boxShadow: '0 1px 2px 0 rgba(0,0,0,.25)',
					backgroundColor: '#fff',
					padding: '10px 20px',
					marginBottom: '10px',
					// textAlign: 'center',
				}}>
				<span>
					<b>PLEASE NOTE</b>
				</span>
				<ul>
					<li>You can use 20% of your total points for every order</li>
				</ul>
			</Box>
		</div>
	);
};

export default TSSPage;
