/**
 * External dependencies
 */
import React from 'react';

export default ({
	titleNumber,
	title,
	description,
	showBorderBottom = true,
}) => {
	return (
		<>
			<div
				className={`${
					showBorderBottom && 'border-b border-[#888] pb-7'
				} progress-ui`}
			>
				<h1 className="md:space-x-10 font-heading text-3xl uppercase flex flex-col md:flex-row">
					<span>{titleNumber}</span> <span>{title}</span>{' '}
				</h1>
				<p className="pt-7 text-sm text-[#888]">{description}</p>
			</div>
		</>
	);
};
