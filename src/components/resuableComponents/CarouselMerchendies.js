import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box } from '@mui/material';

const CarouselMerchendies = ({ images }) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 5 },
		{ width: 1200, itemsToShow: 5 },
	];
	return (
		<div>
			<Carousel breakPoints={breakPoints} showArrows={false} pagination={false}>
				{images.map((i) => {
					return (
						<Box style={{ width: '90%' }}>
							<Box
								style={{
									backgroundImage: `url(${i})`,
									backgroundSize: 'cover',
									height: '200px',
									// borderRadius: 10,
								}}>
								{/* <Box style={{ textAlign: 'end', padding: '10px' }}>
									<img
										src={heart}
										style={{
											background: 'white',
											borderRadius: 25,
											padding: 8,
										}}
									/>
								</Box> */}
							</Box>
						</Box>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CarouselMerchendies;
