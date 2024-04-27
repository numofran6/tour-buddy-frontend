/**
 * External dependencies
 */
import { IconButton } from '@mui/material';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

export default ({
	heading,
	subHeading,
	description,
	showPaginationBtns,
	inverse = false,
	handlePreviousClick = () => {},
	handleNextClick = () => {},
	scrollLeft = 0,
	maxScroll = 0,
}) => {
	return (
		<div className="flex flex-col space-y-5 padding-x max-w-container">
			<div className="flex items-center space-x-3">
				<div
					className={`border-b-2 w-10 ${
						!inverse ? 'border-[#081922]' : 'border-[#fcfcfc]'
					}`}
				/>
				<h1 className="uppercase">{heading}</h1>
			</div>

			<div className="flex flex-col md:flex-row md:items-center md:justify-between">
				<h3 className="font-heading text-2xl font-medium max-w-md">
					{subHeading}
				</h3>

				{showPaginationBtns && (
					<div className="flex items-center justify-end md:justify-start space-x-3">
						<IconButton
							onClick={handlePreviousClick}
							disabled={scrollLeft === 0}
						>
							<div
								className={`pagination-btns ${
									!inverse
										? 'border-[#081922] text-[#081922]'
										: 'border-[#fcfcfc] text-[#fcfcfc]'
								} ${scrollLeft === 0 && 'border-gray-300 text-gray-300'}`}
							>
								<BsArrowLeft />
							</div>
						</IconButton>

						<IconButton
							onClick={handleNextClick}
							disabled={scrollLeft >= maxScroll}
						>
							<div
								className={`pagination-btns ${
									!inverse
										? 'border-[#081922] text-[#081922]'
										: 'border-[#fcfcfc] text-[#fcfcfc]'
								} ${
									scrollLeft >= maxScroll && 'border-gray-300 text-gray-300'
								}`}
							>
								<BsArrowRight />
							</div>
						</IconButton>
					</div>
				)}
			</div>

			{description && (
				<p className="sm:ml-10 text-sm max-w-lg">{description}</p>
			)}
		</div>
	);
};
