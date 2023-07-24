import { CustomSkeleton, SectionHeading } from '../../shared/components';
import { IconButton, Rating } from '@mui/material';
import { useRef } from 'react';
import { PiMapPinLineThin } from 'react-icons/pi';
import { useFetch, useScroll } from '../../shared/custom-hooks';
import { BsPeople } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Featured = () => {
	const scrollFeaturedRef = useRef(null);
	const { scrollLeft, maxScroll, handleNextClick, handlePreviousClick } =
		useScroll(scrollFeaturedRef);
	const navigate = useNavigate();

	const {
		data: featuredDestinations,
		isLoading,
		isError,
	} = useFetch('get-featuredDestinations', '/destinations?featured=true');

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
					{...{ maxScroll, scrollLeft, handlePreviousClick, handleNextClick }}
				/>

				<div
					className="flex space-x-20 lg:space-x-80 overflow-auto hide-scrollbar padding-x lg:px-72"
					ref={scrollFeaturedRef}
				>
					{isLoading || isError
						? Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="flex-shrink-0 min-h-[30rem]">
									<div className="relative">
										<CustomSkeleton width={400} height={350} />

										<div className="featured-container-info w-[25rem]">
											<CustomSkeleton
												width="100%"
												height="100%"
												background="#081922"
											/>

											<div className="featured-skeleton-btn">
												<CustomSkeleton
													width="100%"
													height="100%"
													background="#295B5F"
												/>
											</div>
										</div>
									</div>
								</div>
						  ))
						: featuredDestinations.map((item, index) => (
								<div key={index} className="flex-shrink-0 min-h-[30rem]">
									<div className="relative">
										<img
											src={item.images[0]}
											alt=""
											className="w-[25rem] h-[20rem] lg:w-[45rem] lg:h-[25rem] img-bg object-cover"
											loading="lazy"
										/>

										<div className="featured-container-info w-[25rem]">
											<div className="flex items-center justify-between">
												<h1 className="text-xl flex items-center">
													<PiMapPinLineThin className="mr-1" /> {item.title}
												</h1>

												<h4 className="text-sm flex items-center">
													{item.maxPeople} <BsPeople className="ml-1 w-5 h-5" />
												</h4>
											</div>

											<div className="flex items-center">
												<Rating
													value={item.rating}
													precision={0.5}
													size="small"
													readOnly
													className="mr-1"
												/>
											</div>

											<p className="text-xs">{item.desc.slice(0, 220)}...</p>

											<div className="flex justify-between lg:justify-start text-sm">
												<h6>
													Price:{' '}
													<span className="font-semibold">${item.price}</span>
												</h6>

												<div className="lg:absolute lg:-bottom-8 lg:-right-16">
													<IconButton
														style={{
															color: '#fcfcfc',
															backgroundColor: '#295B5F',
														}}
														onClick={() =>
															navigate(`/tour/${item.title}`, {
																state: { tour: item },
															})
														}
														className="featured-container-btn"
													>
														<p className="text-sm">Book Now</p>
													</IconButton>
												</div>
											</div>
										</div>
									</div>
								</div>
						  ))}
				</div>
			</div>
		</>
	);
};
