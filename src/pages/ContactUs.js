import React, { useState, useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import {
	Box,
	Container,
	Divider,
	Grid,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import FooterMedia from '../components/resuableComponents/FooterMedia';

const ContactUs = () => {
	// const matchesd = useMediaQuery(theme.breakpoints.down('md'));
	const matchesd =''
	const [tab, setTab] = useState('');
	const handleChange = (val) => {
		setTab(val);
	};
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('xs'));
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Box>
				<h1 style={{ textAlign: 'center' }}>Need More Help? Get in touch.</h1>
			</Box>
			<Grid container spacing={4} style={{ marginTop: 20, marginBottom: 20 }}>
				<Grid item xs={2}></Grid>
				<Grid item xs={12} lg={4} style={{ textAlign: 'center' }}>
					<Box
						style={{
							background: 'rgb(242, 242, 242)',
							textAlign: 'center',
							padding: 60,
							boxShadow: '0 1px 3px 1px #d3d3d3',
						}}>
						<h2>Call Us</h2>
						<img src='https://prod-img.thesouledstore.com/public/theSoul/images/callus.png?format=webp&w=300&dpr=2.0' />
						<br></br>
						<span>022-68493328</span>
						<br></br>
						<span>Mon-Sun: 9:00 AM to 11:00 PM</span>
					</Box>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Box
						style={{
							background: 'rgb(242, 242, 242)',
							textAlign: 'center',
							padding: 60,
							boxShadow: '0 1px 3px 1px #d3d3d3',
						}}>
						<h2>Chat with Us</h2>
						<img src='data:image/png;base64,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' />
						<br></br>
						<br></br>
						<br></br>
					</Box>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
			<Box>
				<h1 style={{ textAlign: 'center' }}>FAQs</h1>
			</Box>
			<Container>
				<Divider style={{ marginTop: 20, marginBottom: 20 }} />
				<Grid container>
					<Grid item xs={12} lg={3}>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>ORDERS & PAYMENT</span>
							<i class='fas fa-angle-right'></i>
						</Box>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>ORDERS & PAYMENT</span>
							<i class='fas fa-angle-right'></i>
						</Box>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>ORDERS & PAYMENT</span>
							<i class='fas fa-angle-right'></i>
						</Box>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>ORDERS & PAYMENT</span>
							<i class='fas fa-angle-right'></i>
						</Box>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>ORDERS & PAYMENT</span>
							<i class='fas fa-angle-right'></i>
						</Box>
					</Grid>
					<Grid item xs={1} lg={1}>
						{matches ? (
							<div
								style={{
									borderLeft: '1px solid grey',
									height: '500px',
								}}></div>
						) : (
							''
						)}
					</Grid>
					<Grid item xs={12} lg={8}>
						<Box
							onClick={() =>
								tab === 'one' ? handleChange('') : handleChange('one')
							}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>How do I use my TSS Points?</span>
							<DownOutlined />
						</Box>
						{tab === 'one' ? (
							<>
								<Box>
									<ul>
										<li>
											You can check how many TSS Points you have in your account
											once you login. Select My Account and click on ‘TSS
											Points’ from the list.
										</li>
										<li>
											You will be able to see Current Active Points, Total
											Purchases, Usage History and Expired Points. To use TSS
											Points once you have added your products to cart and
											clicked on the cart icon to go to the checkout page, you
											will see your order details.
										</li>
										<li>
											Below that will be an option to apply codes for discounts.
											Tick the 'Use TSS Points' box. Once you’re done, proceed
											to checkout, confirm your shipping address, and select the
											desired payment method to confirm your order by clicking
											‘Place Order’.
										</li>
									</ul>
								</Box>
							</>
						) : (
							''
						)}
						<Divider style={{ marginTop: 10 }} />
						<Box
							onClick={() =>
								tab === 'two' ? handleChange('') : handleChange('two')
							}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>How do I use my TSS Points?</span>
							<DownOutlined />
						</Box>
						{tab === 'two' ? (
							<>
								<Box>
									<ul>
										<li>
											You can check how many TSS Points you have in your account
											once you login. Select My Account and click on ‘TSS
											Points’ from the list.
										</li>
										<li>
											You will be able to see Current Active Points, Total
											Purchases, Usage History and Expired Points. To use TSS
											Points once you have added your products to cart and
											clicked on the cart icon to go to the checkout page, you
											will see your order details.
										</li>
										<li>
											Below that will be an option to apply codes for discounts.
											Tick the 'Use TSS Points' box. Once you’re done, proceed
											to checkout, confirm your shipping address, and select the
											desired payment method to confirm your order by clicking
											‘Place Order’.
										</li>
									</ul>
								</Box>
							</>
						) : (
							''
						)}
						<Divider style={{ marginTop: 10 }} />
						<Box
							onClick={() =>
								tab === 'three' ? handleChange('') : handleChange('three')
							}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: 10,
							}}>
							<span>How do I use my TSS Points?</span>
							<DownOutlined />
						</Box>
						{tab === 'three' ? (
							<>
								<Box>
									<ul>
										<li>
											You can check how many TSS Points you have in your account
											once you login. Select My Account and click on ‘TSS
											Points’ from the list.
										</li>
										<li>
											You will be able to see Current Active Points, Total
											Purchases, Usage History and Expired Points. To use TSS
											Points once you have added your products to cart and
											clicked on the cart icon to go to the checkout page, you
											will see your order details.
										</li>
										<li>
											Below that will be an option to apply codes for discounts.
											Tick the 'Use TSS Points' box. Once you’re done, proceed
											to checkout, confirm your shipping address, and select the
											desired payment method to confirm your order by clicking
											‘Place Order’.
										</li>
									</ul>
								</Box>
							</>
						) : (
							''
						)}
						<Divider style={{ marginTop: 10 }} />
					</Grid>
				</Grid>
			</Container>
			{matchesd ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default ContactUs;
