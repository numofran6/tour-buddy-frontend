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
				<h1 className="md:space-x-10 font-heading text-3xl uppercase flex flex-col md:flex-row">
					<span>{titleNumber}</span> <span>{title}</span>{' '}
				</h1>
				<p className="pt-7 text-sm text-[#41a1a8]">{description}</p>
			</div>
		</>
	);
};
