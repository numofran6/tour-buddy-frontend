import { SectionHeading, UnderlineBtn } from '../../shared/components';
import { Button, IconButton } from '@mui/material';
import { PiMapPinLineThin } from 'react-icons/pi';

export const Featured = () => {
	return (
		<>
			<div className="space-y-10">
				<SectionHeading
					heading={'Popular Places'}
					subHeading={
						'Discover the most famous and beautiful places of the whole Ghana'
					}
					description={
						'Accra fascinates with its wildness and beauty. We have collected the most popular places that always receive hundreds of tourists.'
					}
				/>

				<div className="flex justify-center">
					{Array.from({ length: 1 }).map((_, index) => (
						<div key={index} className="flex-shrink-0 relative">
							<img
								src=""
								alt=""
								className="w-[45rem] img-bg h-[25rem] object-cover"
								loading="lazy"
							/>

							<div className="absolute -left-56 -bottom-10 w-[20rem] h-[15rem] p-5 bg-[#081922] text-[#fcfcfc] z-10 flex flex-col justify-between">
								<div className="flex items-center justify-between">
									<h1 className="text-2xl flex items-center">
										<PiMapPinLineThin className="mr-1" /> Isle of Skye
									</h1>

									<h4>7 Days</h4>
								</div>

								<p className="text-xs">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Deleniti ullam repellat vitae consequatur error dolor est!
									Fugiat quasi iste maxime, veritatis odio natus repudiandae,
									maiores ex illo molestias commodi ratione!
								</p>

								<div className="flex justify-start text-sm ">
									<h6>
										Price: <span className="font-semibold">$700</span>
									</h6>
								</div>

								<div className="absolute -bottom-8 -right-16">
									<IconButton
										style={{ color: '#fcfcfc', backgroundColor: '#295B5F' }}
										className="w-28 h-28 rounded-full flex flex-col justify-center"
									>
										<p className="text-sm">Book Now</p>
									</IconButton>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
