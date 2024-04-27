/**
 * External dependencies
 */
import { Skeleton } from '@mui/material';
import React from 'react';

export default ({
	variant = 'rectangular',
	width = '100%',
	background = '#e4e5e6',
	height,
}) => {
	return (
		<Skeleton
			width={width}
			height={height}
			variant={variant}
			style={{
				background: `${background}`,
			}}
		/>
	);
};
