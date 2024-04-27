/**
 * External dependencies
 */
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

/**
 * Internal dependencies
 */
import { CustomSkeleton, SectionHeading } from '../../shared/components';
import { useDestinationContext } from '../../shared/context';
import { useFetch } from '../../shared/custom-hooks';

export default () => {
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
				/>

				<div className="regions-container fade-in-up will-animate hide-scrollbar max-w-container">
					{isLoading || isError
						? Array.from({ length: 4 }).map((_, i) => (
								<div key={i} className="regions-content ">
									<CustomSkeleton height={288} />

									<div className="flex justify-between items-center flex-wrap gap-3 px-7 sm:px-0">
										<CustomSkeleton variant="text" width={100} />
										<CustomSkeleton variant="text" width={100} />
									</div>
								</div>
						  ))
						: allRegions?.map((region, i) => (
								<div key={region.name} className="regions-content">
									<img
										onClick={() => handleRegionClick(region.name)}
										src={region.image}
										alt=""
										className="img-bg w-full h-[22rem] object-cover cursor-pointer"
										loading="lazy"
									/>

									<div className=" flex justify-between items-center flex-wrap gap-3 px-7 sm:px-0">
										<h1 className="text-2xl">{region.name}</h1>

										<button onClick={() => handleRegionClick(region.name)}>
											<p className="border-b-2 border-[#081922] text-[#081922] flex items-center text-xs font-semibold pl-1">
												Explore Now
												<FiArrowUpRight className="ml-5 w-5 h-5 hover:-translate-y-1 transition duration-200 ease-in-out" />
											</p>
										</button>
									</div>
								</div>
						  ))}
				</div>
			</div>
		</>
	);
};
