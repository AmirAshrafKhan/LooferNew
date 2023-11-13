import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../reducers/action';
import FooterMedia from './FooterMedia';

const Layout = ({ children }) => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const navigate = useNavigate();
	const dispatch=useDispatch();
	
	const logOutLoofer=async()=>{
		localStorage.clear();
		dispatch(logOut()); 
		navigate("/")
	}
	return (
		<>
			<Header />
			<Container style={{ marginTop: 30, marginBottom: 30 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} lg={3}>
						<Box style={{ background: '#f1f1f1', padding: 20 }}>
							<span>
								<b>{localStorage.getItem("user_name")}</b>
							</span>
							<br></br>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
							{localStorage.getItem("user_email")}
							</span>
						</Box>
						<Box
							onClick={() => navigate('/order')}
							mt={2}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Orders</span>
							<span style={{ fontSize: 12, color: 'rgba(88, 89, 91, 1)' }}>
								(Track your order here)
							</span>
						</Box>
						<Box
							onClick={() => navigate('/mygiftvocher')}
							mt={2}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								cursor: 'pointer',
								alignItems: 'center',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Gift Vocher</span>
						</Box>
						<Box
							onClick={() => navigate('/tss')}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								TSS Points (Active TSS Points: 0.00)
							</span>
						</Box>
						<Box
							onClick={() => navigate('/tss')}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								TSS Money (TSS Money Balance: ₹ 0.00)
							</span>
						</Box>{' '}
						<Box
							onClick={() => navigate('/mysavedcard')}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Saved Cards </span>
						</Box>
						<Box
							onClick={() => navigate('/faq')}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>FAQs </span>
						</Box>
						<Box
							onClick={() => navigate('/profile')}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}> Profile</span>
						</Box>
						<Box
							mt={3}
							onClick={() => navigate('/submitdesign')}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								border: '1px solid lightgrey',
								padding: 15,
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								{' '}
								Submit Design
							</span>
						</Box>
						<Box
							mt={2}
							onClick={logOutLoofer}
							style={{
								display: 'flex',
								border: '1px solid #d9534f',
								padding: 15,
								cursor: 'pointer',
								textAlign: 'center',
							}}>
							<span style={{ textAlign: 'center', color: '#d9534f' }}>
								Logout
							</span>
						</Box>
					</Grid>
					<Grid item xs={12} lg={9}>
						{children}
					</Grid>
				</Grid>
			</Container>
			{/* {matches ? <FooterMedia/> :<Footer />} */}
			<Footer/>
			
		</>
	);
};

export default Layout;
