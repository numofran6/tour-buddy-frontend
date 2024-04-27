/**
 * External dependencies
 */
import { useEffect } from 'react';

/**
 * Internal dependencies
 */
import './index.scss';
import { Layout } from '../../shared/components';
import { aboutBg, signage } from '../../assets/images';

export default () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<Layout>
			<main className="max-w-container padding-x py-8 mb-20 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-20 will-animate fade-in">
				<div className="col-span-4">
					<img
						src={aboutBg}
						className="w-full h-[300px] lg:h-[500px] object-cover img-bg"
					/>
				</div>

				<div className="text-sm space-y-8 col-span-3 max-w-[540px]">
					<div className="flex items-center space-x-3">
						<div className="border-b-2 w-10 border-[#081922]" />
						<h1 className="uppercase">About Us</h1>
					</div>

					<h1 className="page-title">Welcome to Tour Buddy</h1>

					<div>
						<h4 className="font-heading text-xl font-medium">
							We’re on a mission to seamlessly connect travel enthusiasts to
							organized adventures at TourBuddy.
						</h4>

						<p className="text-[0.9rem] mt-5">
							By pairing tourists with locals, they get to experience the true
							sense of being Ghanaian. Locals will take tourists to places that
							foreigners wouldn't even know about and give them an amazing
							experience.
						</p>
					</div>

					<img src={signage} alt="" />
				</div>
			</main>
		</Layout>
	);
};
