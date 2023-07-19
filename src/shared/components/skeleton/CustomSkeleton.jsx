import { Skeleton } from '@mui/material';
import React from 'react';

export const CustomSkeleton = ({
	variant = 'rectangular',
	width = '100%',
	background = '#f2f4f5',
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
