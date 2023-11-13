import React, { useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import FooterMedia from '../components/resuableComponents/FooterMedia';
const AboutUs = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Box style={{ background: '#117a7a', padding: 40, textAlign: 'center' }}>
				<p style={{ color: 'white' }}>
					Our ‘About Us’ page would like to thank you from the bottom of its
					heart for visiting.
				</p>
				<b style={{ color: 'white' }}>
					It doesn‘t get a lot of attention usually, as people are busy surfing
					other, ‘cooler’ pages. The fact that you voluntarily decided to come
					here means a lot. Honestly. *sniff sniff*
				</b>
			</Box>
			<Container>
				<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
					<img src='https://tss-static-images.gumlet.io/banners/about-whoweare.jpg' />
					<Box>
						<h3>We are your favourite, online store.</h3>
						<p>
							We create and curate stunning designs and print them on all sorts
							of equally stunning products- from t-shirts to phone covers to
							backpacks to boxers to mugs to socks to badges to pins to hoodies
							and many, many more! Our funky products are designed and printed
							specifically to spread happiness, right down to the bottom of your
							‘soul’. A recent study by our internal, self-funded, fashion
							forward (and totally unbiased) team showed that if you buy from
							www.thesouledstore.com, it increases your lifespan by 7.5%. So if
							you’re looking for great products, with even greater deals and
							discounts, you’ve come to the right place!
						</p>
					</Box>
				</Box>
				<Box mt={5} style={{ backgroud: '#f0f0f0', padding: 20 }}>
					<Grid container spacing={4}>
						<Grid item xs={12} lg={8}>
							<Box>
								<h3>We are your favourite, online store.</h3>
								<p>
									We create and curate stunning designs and print them on all
									sorts of equally stunning products- from t-shirts to phone
									covers to backpacks to boxers to mugs to socks to badges to
									pins to hoodies and many, many more! Our funky products are
									designed and printed specifically to spread happiness, right
									down to the bottom of your ‘soul’. A recent study by our
									internal, self-funded, fashion forward (and totally unbiased)
									team showed that if you buy from www.thesouledstore.com, it
									increases your lifespan by 7.5%. So if you’re looking for
									great products, with even greater deals and discounts, you’ve
									come to the right place!
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} lg={4}>
							<img src='https://tss-static-images.gumlet.io/banners/about-whoweare2.png' />
						</Grid>
					</Grid>
				</Box>
			</Container>
			<Box style={{ background: '#117a7a', padding: 40, textAlign: 'center' }}>
				<h3 style={{ color: 'white' }}>Why we’re called ‘The Souled Store’ </h3>
				<p style={{ color: 'white' }}>
					For starters, it makes for a great pun on the word ‘sold’, since we
					‘sell' stuff. Smart, right? But more importantly, The Souled Store was
					born out of the idea of loving what you do - “following your soul”.
					Our philosophy is that life is short. Don’t spend it doing something
					you don’t like. There are too many Monday mornings, and you can’t go
					dreading every single one of them.
				</p>
				<p style={{ color: 'white' }}>
					We, at The Souled Store, love what we do- designs, products,
					marketing, and everything in between. Our goal is to give everyone
					something they'll love, something they can use to express themselves,
					and, simply put, something to put a smile on their face. So, whether
					it's superheroes, TV shows, pop culture, music, sports, or quirky,
					funny stuff you're looking for, we have something for everyone.
					Because each person is a special snowflake (whether or not they
					believe it), and they deserve only the most insane merchandise
					available out there! So, if you relate to the feeling, and believe in
					following one's heart (soul), hop along on this wonderful journey of
					ours, and help us spread the love!
				</p>
			</Box>
			<Container style={{ marginTop: 50 }}>
				<Box>
					<img
						src='https://tss-static-images.gumlet.io/banners/about-doodlebanner.png'
						style={{ width: '100%' }}
					/>
				</Box>
			</Container>
			<Box
				style={{
					background: '#117a7a',
					padding: 40,
					textAlign: 'center',
					marginTop: 20,
				}}>
				<h3 style={{ color: 'white' }}>The Team </h3>
				<p style={{ color: 'white' }}>
					For starters, it makes for a great pun on the word ‘sold’, since we
					‘sell' stuff. Smart, right? But more importantly, The Souled Store was
					born out of the idea of loving what you do - “following your soul”.
					Our philosophy is that life is short. Don’t spend it doing something
					you don’t like. There are too many Monday mornings, and you can’t go
					dreading every single one of them.
				</p>
				<p style={{ color: 'white' }}>
					We, at The Souled Store, love what we do- designs, products,
					marketing, and everything in between. Our goal is to give everyone
					something they'll love, something they can use to express themselves,
					and, simply put, something to put a smile on their face. So, whether
					it's superheroes, TV shows, pop culture, music, sports, or quirky,
					funny stuff you're looking for, we have something for everyone.
					Because each person is a special snowflake (whether or not they
					believe it), and they deserve only the most insane merchandise
					available out there! So, if you relate to the feeling, and believe in
					following one's heart (soul), hop along on this wonderful journey of
					ours, and help us spread the love!
				</p>
			</Box>
			{matches ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default AboutUs;
