import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import Footer from '../components/resuableComponents/Footer';
import Header from '../components/resuableComponents/Header';
import LoginForm from '../forms/LoginForm';
import FooterMedia from '../components/resuableComponents/FooterMedia';

const LoginPage = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Grid container style={{ background: '#e6e7e8' }}>
				<Grid item xs={12} lg={4}></Grid>
				<Grid item xs={12} lg={4}>
					<LoginForm />
				</Grid>
				<Grid item xs={12} lg={4}></Grid>
			</Grid>
			{matches ? <FooterMedia/> :<Footer />}

		</>
	);
};

export default LoginPage;
