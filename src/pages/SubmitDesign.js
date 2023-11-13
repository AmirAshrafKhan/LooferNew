import React, { useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Divider } from 'antd';
import FooterMedia from '../components/resuableComponents/FooterMedia';

const SubmitDesign = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Box>
				<img
					src='https://tss-static-images.gumlet.io/banners/sell-your-artwork-banner.jpg'
					style={{ maxWidth: '100%' }}
				/>
			</Box>
			<Container>
				<Box>
					<p>
						A wise man once said, “The Earth, without art, is just eh.”. Or
						maybe it was Google. But we totally agree. The Souled Store has come
						up with a platform where amazeballs artists from all over the world
						gather, showcase their artwork, and fill their piggy banks with the
						royalty earned. If you’re a scribbler, doodler, sketcher, or MS
						Paint ninja (although we prefer Adobe Illustrator), all you have to
						do is email us your designs and we'll take it from there. We
						regularly feature our artists on social media, and promote their new
						designs.
					</p>
				</Box>
				<span>
					------------------------------------------------------------------------------
					<b style={{ marginLeft: 5, marginRight: 5 }}>HOW IT WORKS</b>
					------------------------------------------------------------------------------
				</span>
				<Grid container style={{ marginTop: 40, marginBottom: 40 }}>
					{Array.from(Array(3)).map((i) => {
						return (
							<Grid item xs={4}>
								<Box style={{ textAlign: 'center' }}>
									<img
										src='https://tss-static-images.gumlet.io/icons/tss-points.png'
										style={{ height: 50 }}
									/>
									<br></br>
									<span>
										<b>1. GET AN IDEA</b>
									</span>
									<br></br>
									<p>
										This is the first and the hardest step. The best designs
										often have smart concepts behind them. If you’re looking for
										inspiration, check out our website to get an idea of the
										designs that do well.
									</p>
								</Box>
							</Grid>
						);
					})}
				</Grid>
				<Divider />
				<h4 style={{ textAlign: 'center' }}>
					We recommend you view our Submission Guidelines for more information.
				</h4>
				<Divider />
			</Container>
			{matches ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default SubmitDesign;
