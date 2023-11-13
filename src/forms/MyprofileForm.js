import React, { useEffect } from 'react';
import { Grid, Box, Button, Divider, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

const initialValues = {
	name: '',
	email: '',
	mobile: '',
	lastname: '',
	address: '',
	password: '',
	dob: '',
}
const SignInSchema = Yup.object().shape({
	username: Yup.string().required('Username Required'),
	email: Yup.string().required('email Required'),
	password: Yup.string().min(6, 'password minimum  6 length').required('Password Required'),
	name: Yup.string().required('name Required'),
	lastname: Yup.string().required('Last name Required'),

	mobile: Yup.string().min(10, 'enter valid 10 digit Mobile number').required('mobile Required'),
	gender: Yup.string().required('gender Required'),
});


const MyProfileForm = () => {
	const userInfo = useSelector((state) => state);

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: initialValues,
		validationSchema: SignInSchema,
		onSubmit: (values) => {
			console.log(values, 'values')
		}
	});

	useEffect(() => {
		console.log(userInfo, 'userInfo');
	}, [userInfo])


	const onSave = () => {
		console.log("edit User form Details API");
		

	}

	return (

		<form onSubmit={handleSubmit}>
			<Box style={{ padding: 10 }}>
				<Box style={{ border: '1px solid lightgrey', padding: 30 }}>
					<Grid container spacing={4}>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								Email Id
							</span>
							<br></br>
							<input
											name='email'
											type='text'
											value={localStorage.getItem("user_email")}
											// value={value.email}
											
											placeholder='Email'
											style={{
												padding: 10,
												width: '100%',
												borderRadius: 5,
												border: errors?.email ? '2px solid red' : '1px solid',
												background: '#F6F6F6',
												marginTop: 10,
											}}
											inputProps={{
												style: { padding: 12 },
											}}
											onChange={handleChange} onBlur={handleBlur}
										/>
							{/* <input
								name='email'
								type='text'
								value={localStorage.getItem("user_email") || ""}
								// value={value.email}
								disabled
								placeholder='Email'
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.email ? '2px solid red' : '1px solid',
									background: '#F6F6F6',
									marginTop: 10,
								}}
								onChange={handleChange}
								onBlur={handleBlur}
							/> */}

							<br />
							{errors?.email ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.email}
								</span>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								Password
							</span>
							<br></br>
							<input
								name='password'
								type='text'
								placeholder='Password'
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.password ? '2px solid red' : '1px solid',
									background: '#F6F6F6',
									marginTop: 10,
								}}
								value={values.password}
								inputProps={{
									style: { padding: 12 },
								}}
								onChange={handleChange} onBlur={handleBlur}
							/>
							<br />
							{errors?.password ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.password}
								</span>
							) : null}
						</Grid>
					</Grid>
				</Box>
				<Box style={{ border: '1px solid lightgrey', padding: 30 }}>
					<div style={{ color: 'rgba(88, 89, 91, 1)' }}>
						General Information
					</div>
					<Divider style={{ marginTop: 20, marginBottom: 20 }} />
					<Grid
						container
						style={{ marginTop: 5, padding: 10 }}
						spacing={4}>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								First Name*
							</span>
							<br></br>
							<input
								name='name'
								type='text'
								placeholder='Enter First Name'
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.name ? '2px solid red' : '1px solid',
									marginTop: 10,
								}}
								value={values.name}

								inputProps={{
									style: { padding: 12 },
								}}
								onChange={handleChange} onBlur={handleBlur}
							/>
							<br />
							{errors?.name ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.name}
								</span>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								Date of Birth
							</span>
							<br></br>
							<input
								name='dob'
								type='date'
								placeholder=''
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.dob ? '2px solid red' : '1px solid',
									marginTop: 10,
								}}
								value={values.dob}

								inputProps={{
									style: { padding: 12 },
								}}
								onChange={handleChange} onBlur={handleBlur}
							/>
							<br />
							{errors?.dob ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.dob}
								</span>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								Last Name*
							</span>
							<br></br>
							<input
								name='lastname'
								type='text'
								placeholder='Enter Last Name'
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.lastname ? '2px solid red' : '1px solid',
									marginTop: 10,
								}}
								value={values.lastname}

								inputProps={{
									style: { padding: 12 },
								}}
								onChange={handleChange} onBlur={handleBlur}
							/>
							<br />
							{errors?.lastname ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.lastname}
								</span>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								Mobile Number *
							</span>
							<br></br>
							<input
								name='mobile'
								type='text'
								placeholder='Enter Mobile Number'
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.mobile ? '2px solid red' : '1px solid',
									marginTop: 10,
								}}
								value={values.mobile}

								inputProps={{
									style: { padding: 12 },
								}}
								onChange={handleChange} onBlur={handleBlur}
							/>
							<br />
							{errors?.mobile ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.mobile}
								</span>
							) : null}
						</Grid>
						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>Gender</span>
							<br></br>
							<RadioGroup
								row
								aria-labelledby='demo-row-radio-buttons-group-label'
								name='row-radio-buttons-group'>
								<FormControlLabel
									value='female'
									control={<Radio />}
									label='Female'
									name='gender' onChange={handleChange} onBlur={handleBlur}
								/>
								<FormControlLabel
									value='male'
									control={<Radio />}
									label='Male'
									name='gender' onChange={handleChange} onBlur={handleBlur}
								/>
								<FormControlLabel
									value='other'
									control={<Radio />}
									label='Other'
									name='gender' onChange={handleChange} onBlur={handleBlur}
								/>
							</RadioGroup>
							{errors.gender && touched.gender ? (
								<div style={{ color: 'red' }}>
									{errors.gender}
								</div>
							) : null}
						</Grid>

						<Grid item xs={6}>
							<span style={{ color: 'rgba(88, 89, 91, 1)' }}>
								Address
							</span>
							<br></br>
							<input
								name='address'
								type='text'
								rows='4'
								placeholder='Enter Address'
								style={{
									padding: 10,
									width: '100%',
									borderRadius: 5,
									border: errors?.address ? '2px solid red' : '1px solid',
									marginTop: 10,
								}}
								value={values.address}

								inputProps={{
									style: { padding: 12 },
								}}
								onChange={handleChange} onBlur={handleBlur}
							/>
							<br />
							{errors?.address ? (
								<span style={{ color: 'red', fontSize: 12 }}>
									{errors?.address}
								</span>
							) : null}
						</Grid>
					</Grid>
				</Box>
			</Box>

			<Grid container>
				<Grid item xs={3}></Grid>
				<Grid item xs={3}>
					<Button
						type='submit'
						style={{
							background: 'rgb(239, 64, 80)',
							color: 'white',
							marginTop: 30,
							// padding: 16,
							borderRadius: 5,
							width: '100%',
						}} onClick={onSave}>
						Save
					</Button>
				</Grid>
				<Grid item xs={3}></Grid>

				<Grid item xs={3}></Grid>
			</Grid>
		</form>
	);
};

export default MyProfileForm;
