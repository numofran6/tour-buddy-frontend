import { howitworks } from '../../assets/images';
import { ProgressUI, SectionHeading } from '../../shared/components';

export const HowItWorks = () => {
	return (
		<>
			<div className="py-28 bg-[#081921] text-[#fcfcfc]">
				<div className="max-w-container flex space-x-20">
					<div className="space-y-16 w-1/2">
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

					<div className="w-1/2 flex flex-col justify-between">
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
