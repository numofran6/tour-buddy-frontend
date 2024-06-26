/**
 * Internal dependencies
 */
import { howitworks } from '../../assets/images';
import { ProgressUI, SectionHeading } from '../../shared/components';

export default () => {
	return (
		<>
			<div className="py-28 bg-[#242424] text-[#fcfcfc] padding-x">
				<div className="max-w-container flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-20">
					<div className="space-y-16 md:w-1/2 will-animate fade-in-left">
						<SectionHeading
							inverse
							showPaginationBtns={false}
							heading={'How it works'}
							subHeading={
								'Here are the main three steps how you can book the trip of your dreams'
							}
							description={
								'When planning your trip with us, you will spen a minimum of time and get a maximum of emotions and memories'
							}
						/>

						<img
							src={howitworks}
							alt=""
							className="img-bg w-full h-[18rem] object-cover object-bottom"
						/>
					</div>

					<div className="md:w-1/2 space-y-10 flex flex-col justify-between will-animate fade-in-right">
						<ProgressUI
							titleNumber="01"
							title="Choose Region"
							description="Check out the tours section. Choose one of the suggested ones. You're good for this step"
						/>

						<ProgressUI
							titleNumber="02"
							title="Select Destination"
							description="Check out the tours section. Choose one of the suggested ones. You're good for this step"
						/>

						<ProgressUI
							titleNumber="03"
							title="Choose Your Tour Buddy"
							description="Check out the tours section. Choose one of the suggested ones. You're good for this step"
							showBorderBottom={false}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
