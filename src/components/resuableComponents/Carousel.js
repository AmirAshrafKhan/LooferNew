import React, { Component } from 'react';
import Slider from 'react-slick';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const navigate = useNavigate();
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			{/* background: 'grey' */}
			<div style={{ padding: '40px' }}>
				<Slider {...settings}>
					<div>
						<img
							onClick={() => navigate('/product')}
							style={{ width: '90%', height: 'auto' }}
							src='https://e7.pngegg.com/pngimages/788/480/png-clipart-shopping-resolution-shoping-miscellaneous-fashion.png'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							onClick={() => navigate('/product')}
							style={{ width: '90%', height: 'auto' }}
							src='https://e7.pngegg.com/pngimages/788/480/png-clipart-shopping-resolution-shoping-miscellaneous-fashion.png'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							onClick={() => navigate('/product')}
							style={{ width: '90%', height: 'auto' }}
							src='https://e7.pngegg.com/pngimages/788/480/png-clipart-shopping-resolution-shoping-miscellaneous-fashion.png'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							onClick={() => navigate('/product')}
							style={{ width: '90%', height: 'auto' }}
							src='https://e7.pngegg.com/pngimages/788/480/png-clipart-shopping-resolution-shoping-miscellaneous-fashion.png'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							onClick={() => navigate('/product')}
							style={{ width: '90%', height: 'auto' }}
							src='https://e7.pngegg.com/pngimages/788/480/png-clipart-shopping-resolution-shoping-miscellaneous-fashion.png'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							onClick={() => navigate('/product')}
							style={{ width: '90%', height: 'auto' }}
							src='https://e7.pngegg.com/pngimages/788/480/png-clipart-shopping-resolution-shoping-miscellaneous-fashion.png'
							alt=''
						/>
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Carousel;
