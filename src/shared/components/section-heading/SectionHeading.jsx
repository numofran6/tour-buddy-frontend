import { IconButton } from '@mui/material';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import './SectionHeading.css';

export const SectionHeading = ({
	heading,
	subHeading,
	description,
	showPaginationBtns = true,
	inverse = false,
}) => {
	return (
		<div className="flex flex-col space-y-5 max-w-container">
			<div className="flex items-center space-x-3">
				<div
					className={`border-b-2 w-10 ${
						!inverse ? 'border-[#081922]' : 'border-[#fcfcfc]'
					}`}
				/>
				<h1 className="uppercase">{heading}</h1>
			</div>

			<h3 className="font-heading text-2xl font-medium max-w-md">
				{subHeading}
			</h3>

			<div className="flex items-center justify-between">
				<p className="ml-10 text-sm max-w-lg">{description}</p>

				{showPaginationBtns && (
					<div className="flex items-center space-x-3">
						<IconButton>
							<div
								className={`pagination-btns ${
									!inverse
										? 'border-[#081922] text-[#081922]'
										: 'border-[#fcfcfc] text-[#fcfcfc]'
								}`}
							>
								<BsArrowLeft />
							</div>
						</IconButton>

						<IconButton>
							<div
								className={`pagination-btns ${
									!inverse
										? 'border-[#081922] text-[#081922]'
										: 'border-[#fcfcfc] text-[#fcfcfc]'
								}`}
							>
								<BsArrowRight />
							</div>
						</IconButton>
					</div>
				)}
			</div>
		</div>
	);
};
