import { useRef } from 'react';
import {
	CustomSkeleton,
	SectionHeading,
	UnderlineBtn,
} from '../../shared/components';
import { Button } from '@mui/material';
import { useFetch, useScroll } from '../../shared/custom-hooks';
import { useDestinationContext } from '../../shared/context/destinationsContext';
import { useNavigate } from 'react-router-dom';

export const Regions = () => {
	const scrollRegionsRef = useRef(null);
	const { scrollLeft, maxScroll, handleNextClick, handlePreviousClick } =
		useScroll(scrollRegionsRef, 300);
	const { setSelectedRegions } = useDestinationContext();
	const navigate = useNavigate();

	const {
		data: allRegions,
		isLoading,
		isError,
	} = useFetch('get-regions', '/regions');

	const handleRegionClick = (regionName) => {
		setSelectedRegions([regionName]);
		navigate('/tours');
	};

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
					className="regions-container hide-scrollbar"
					ref={scrollRegionsRef}
				>
					{isLoading || isError
						? Array.from({ length: 4 }).map((_, i) => (
								<div key={i} className="regions-content ">
									<CustomSkeleton height={288} />

									<CustomSkeleton variant="text" height={60} width="35%" />

									<div>
										<CustomSkeleton variant="text" />
										<CustomSkeleton variant="text" />
										<CustomSkeleton variant="text" />
									</div>

									<CustomSkeleton height={50} width={120} />
								</div>
						  ))
						: allRegions?.map((region, i) => (
								<div key={region.name} className="regions-content ">
									<img
										onClick={() => handleRegionClick(region.name)}
										src={region.image}
										alt=""
										className="img-bg w-full h-[22rem] object-cover cursor-pointer"
										loading="lazy"
									/>

									<h1 className="text-2xl">{region.name}</h1>

									<p className="text-sm">{region.desc.slice(0, 225)}...</p>

									<Button
										onClick={() => handleRegionClick(region.name)}
										style={{ textTransform: 'inherit' }}
									>
										<UnderlineBtn title="Explore Now" />
									</Button>
								</div>
						  ))}
				</div>
			</div>
		</>
	);
};
