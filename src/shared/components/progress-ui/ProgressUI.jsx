import React from 'react';

export const ProgressUI = ({
	titleNumber,
	title,
	description,
	showBorderBottom = true,
}) => {
	return (
		<>
			<div
				className={`${showBorderBottom && 'border-b border-[#295B5F] pb-7'}`}
			>
				<h1 className="space-x-10 font-heading text-3xl  uppercase">
					<span>{titleNumber}</span> <span>{title}</span>{' '}
				</h1>
				<p className="pt-7 text-sm text-[#295B5F]">{description}</p>
			</div>
		</>
	);
};
