import React from 'react';
import { Layout } from '../../shared/components';
import { ghanamap } from '../../assets/images';
import { LuCake } from 'react-icons/lu';
import { AchievementTag } from './AchievementTag';
import { BiImages } from 'react-icons/bi';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';

export const About = () => {
	return (
		<Layout>
			<main className="max-w-container min-h-[60vh] py-8 mb-20 grid grid-cols-3 gap-20">
				<div className="text-sm space-y-10 col-span-2">
					<h1 className="text-6xl font-semibold font-heading">About Us</h1>

					<div>
						We’re on a mission to seamlessly connect travel enthusiasts to
						organized adventures at TourBuddy. By pairing tourists with locals,
						they get to experience the true sense of being Ghanaian. Locals will
						take tourists to places that foreigners wouldn't even know about and
						give them an amazing experience.
					</div>

					<div>
						With offices in Accra, Kumasi, and Tamale, TourBuddy’s travel
						experts are available online 24/7 to support the entire booking and
						travel experience. TourBuddy promotes environmentally sustainable
						travel by enabling all travelers to view and offset the carbon
						impact of their adventures, and the company works tirelessly with
						local operators to help protect and strengthen the communities that
						benefit from adventure tourism.
					</div>

					<div className="flex items-center justify-between">
						<AchievementTag
							icon={<LuCake className="w-28 h-28" />}
							highlight={'2010'}
							desc={'funded'}
						/>

						<AchievementTag
							icon={<BiImages className="w-28 h-28" />}
							highlight={'50,000+'}
							desc={'adventures'}
						/>

						<AchievementTag
							icon={<BsGlobeEuropeAfrica className="w-28 h-28" />}
							highlight={'1,200+'}
							desc={'guides'}
						/>
					</div>
				</div>

				<div className="flex justify-end">
					<img src={ghanamap} alt="Ghana Map" className="w-[100%]" />
				</div>
			</main>
		</Layout>
	);
};
