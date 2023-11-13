import { Box } from '@mui/material';
import React, { useEffect } from 'react';

const MygiftVocher = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<span>MY GIFT VOUCHER</span>
			<Box
				mt={2}
				style={{
					textAlign: 'center',
					border: '1px solid lightgrey',
					padding: 20,
				}}>
				<span>My Voucher list is empty</span>
			</Box>
		</div>
	);
};

export default MygiftVocher;
