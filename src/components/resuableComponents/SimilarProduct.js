import React, { useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';
// import Arrow from '../../assets/images/Arrow.svg';
import heart from '../../assets/images/heart.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getProduct } from '../../reducers/HomeReducer';
import { useState } from 'react';
import axios from 'axios';
import { productDetails } from '../../reducers/action';
// import Rectangle from '../../assets/images/Rectangle.svg';
	const SimilarProduct = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productByCategoryState = useSelector(state => state.productByCat);
	const { categoryProducts, status, error } = productByCategoryState;
	
	
	const onClickProductDetails=(productId)=>{
		dispatch(productDetails(productId));
		navigate('/productdetail')
	}
	return (
<>

		<Grid
			container
			spacing={2}
			style={{ marginTop: 20 }}
			>
				{/* <button onClick={callApi}>call api</button> */}

				
			{(categoryProducts.products && categoryProducts.products.length>0) && categoryProducts.products.map((val,i) => {

				return (
					<Grid item xs={12} sm={6} md={4} lg={3} 
						onClick={() =>onClickProductDetails(val.id)}>
						<Box
							style={{
								// backgroundImage: `url(${'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Naruto-23-Men-Basketball-Coord-Set--012023_07_04-10-14-30.jpg?format=webp&w=300&dpr=1.3'})`,
								backgroundImage: `url(${val.feature_image})`,
								backgroundSize: 'cover',
								height: '310px',
								// borderRadius: 10,
							}}>
							<Box style={{ textAlign: 'end', padding: '10px' }}>
								<img
									src={heart}
									style={{
										background: 'white',
										borderRadius: 25,
										padding: 8,
									}}
								/>
							</Box>
						</Box>
						<Box
							// display={'flex'}
							// justifyContent={'space-between'}
							alignItems={'center'}
							style={{ padding: 10 }}>
							<Box
								// display={'flex'}
								// justifyContent={'space-between'}
								alignItems={'center'}>
								<span style={{ fontSize: 14, fontWeight: 'bold' }}>
									{val.name}
								</span>
								<br />
								<span style={{ fontSize: 12, color: 'grey' }}>
									{val.description}
								</span>
							</Box>
							<span>{val.price}</span>
						</Box>
						{/* <Box
							style={{
								padding: 10,
							}}></Box> */}
					</Grid>
				);
			})}
			</Grid>
		</>
	);
};

export default SimilarProduct;
