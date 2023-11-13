import React, { Component } from 'react';
import Slider from 'react-slick';

const Carousel2 = () => {
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
							style={{ width: '90%', height: 'auto' }}
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							style={{ width: '90%', height: 'auto' }}
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							style={{ width: '90%', height: 'auto' }}
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							style={{ width: '90%', height: 'auto' }}
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							style={{ width: '90%', height: 'auto' }}
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0'
							alt=''
						/>
					</div>
					<div style={{ marginLeft: '10px' }}>
						<img
							style={{ width: '90%', height: 'auto' }}
							src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.0'
							alt=''
						/>
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Carousel2;
