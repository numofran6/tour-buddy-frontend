import { useRef } from 'react';
import { SectionHeading, UnderlineBtn } from '../../shared/components';
import { Button } from '@mui/material';
import { useFetch, useScroll } from '../../shared/custom-hooks';
import { apiPath } from '../../shared/utils/urlPath';

export const Regions = () => {
	const scrollRegionsRef = useRef(null);
	const { scrollLeft, maxScroll, handleNextClick, handlePreviousClick } =
		useScroll(scrollRegionsRef, 300);

	const { data: allRegions, isLoading } = useFetch(
		'get-regions',
		`${apiPath}/regions`
	);

	return (
		<>
			<div className="space-y-10">
				<SectionHeading
					heading={'Select your region'}
					subHeading={
						'Choose the most exiting and inspiring journey of your life.'
					}
					description={
						'Immerse yourself in the culture of Ghana through locals, learn the history, visit the most beautiful places, create memories that you will never forget in your life.'
					}
					{...{ maxScroll, scrollLeft, handlePreviousClick, handleNextClick }}
				/>

				<div
					className="flex space-x-20 overflow-scroll hide-scrollbar ml-[10rem] pr-[10rem]"
					ref={scrollRegionsRef}
				>
					{allRegions?.map((region, i) => (
						<div
							key={region.name}
							className="w-[40rem] space-y-3 flex-shrink-0"
						>
							<img
								src=""
								alt=""
								className="img-bg w-full h-[18rem] object-cover"
								loading="lazy"
							/>

							<h1 className="text-2xl">{region.name}</h1>

							<p className="text-sm">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Deleniti ullam repellat vitae consequatur error dolor est!
								Fugiat quasi iste maxime, veritatis odio natus repudiandae,
								maiores ex illo molestias commodi ratione!
							</p>

							<Button style={{ textTransform: 'inherit' }}>
								<UnderlineBtn title="Read More" />
							</Button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
