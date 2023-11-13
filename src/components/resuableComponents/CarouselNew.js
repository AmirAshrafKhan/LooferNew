import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box } from '@mui/material';

const CarouselNew = ({ images }) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		
		{ width: 1200, itemsToShow: 3 },
	];
	return (
		<div>
			<Carousel breakPoints={breakPoints} pagination={false} showArrows={false}>
				{images.map((i) => {
					return (
						<Box onClick={()=>{
							window.location.href=i?.url
						}}>
							<img
								src={i?.image}
								style={{
									background: 'white',
									borderRadius: 25,
									padding: 8,
									maxWidth: '100%',
									// height: 590,
								}}
							/>
						</Box>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CarouselNew;
