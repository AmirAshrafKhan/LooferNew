import { Box, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';

const FandomSection = (props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Box
				style={{ marginTop: matches ? 15 : 50, marginLeft: matches ? 20 : '' }}>
				<h1
					style={{
						textAlign: matches ? '' : 'center',
						fontSize: matches ? 20 : '',
					}}>
					SHOP BY FANDOM
				</h1>
			</Box>
		</>
	);
};

export default FandomSection;
