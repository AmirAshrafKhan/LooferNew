import React, { useEffect } from 'react';
import MyProfileForm from '../forms/MyprofileForm';

const ProfilePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<span>Edit Profile</span>
			<MyProfileForm />
		</div>
	);
};

export default ProfilePage;
