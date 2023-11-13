import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box, Button } from '@mui/material';

const CartCarousel = ({ images }) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 3 },
	];
	return (
		<div>
			<Carousel breakPoints={breakPoints} pagination={false}>
				{images.map((i) => {
					return (
						<Box style={{ width: '90%' }}>
							<Box
								style={{
									backgroundImage: `url(${i})`,
									backgroundSize: 'cover',
									height: '200px',
									// borderRadius: 10,
								}}></Box>
							<Box
								display={'flex'}
								justifyContent={'space-between'}
								alignItems={'center'}
								style={{ padding: 10 }}>
								<Box>
									<span style={{ fontSize: 14, fontWeight: 'bold' }}>
										Hoodies and Sweetshirt
									</span>
									<br />
									<span style={{ fontSize: 12, color: 'grey' }}>
										Jhanvi’s Brand
									</span>{' '}
									<br />
								</Box>
								<span style={{ color: 'grey' }}>$123.00</span>
							</Box>
							<Box>
								<Button
									style={{
										width: '100%',
										border: '1px solid rgb(231, 19, 24)',
										color: 'rgb(231, 19, 24)',
										marginTop: 10,
										marginBottom: 10,
									}}>
									Add Now
								</Button>
							</Box>
						</Box>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CartCarousel;
