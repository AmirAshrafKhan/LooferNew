import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box } from '@mui/material';

const Slder = ({ images }) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1 },
		{ width: 768, itemsToShow: 1 },
		{ width: 1200, itemsToShow: 1 },
	];
	return (
		<div>
			<Carousel breakPoints={breakPoints}>
				{images.map((i) => {
					return (
						<Box style={{ width: '90%' }}>
							<img
								src={i}
								style={{
									background: 'white',
									borderRadius: 25,
									padding: 8,
									width: '100%',
									height: 590,
								}}
							/>
						</Box>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Slder;
