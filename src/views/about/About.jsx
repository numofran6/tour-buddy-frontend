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
			<main className="max-w-container py-8 mb-20 grid grid-cols-5 gap-20">
				<div className="col-span-2">
					<img
						src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
						className="w-full h-full object-cover img-bg"
					/>
				</div>

				<div className="text-sm space-y-10 col-span-3">
					<div className="flex items-center space-x-3">
						<div className="border-b-2 w-10 border-[#081922]" />
						<h1 className="uppercase">About Us</h1>
					</div>

					<h4 className="font-heading text-2xl font-medium">
						We’re on a mission to seamlessly connect travel enthusiasts to
						organized adventures at TourBuddy.
					</h4>

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

					<p>
						By pairing tourists with locals, they get to experience the true
						sense of being Ghanaian. Locals will take tourists to places that
						foreigners wouldn't even know about and give them an amazing
						experience.
					</p>

					<p>
						With offices in Accra, Kumasi, and Tamale, TourBuddy’s travel
						experts are available online 24/7 to support the entire booking and
						travel experience. TourBuddy promotes environmentally sustainable
						travel by enabling all travelers to view and offset the carbon
						impact of their adventures, and the company works tirelessly with
						local operators to help protect and strengthen the communities that
						benefit from adventure tourism.
					</p>
				</div>
			</main>
		</Layout>
	);
};
