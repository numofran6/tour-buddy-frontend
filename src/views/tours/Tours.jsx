import { useEffect, useMemo, useState } from 'react';
import { AiOutlineDollar, AiOutlineLock } from 'react-icons/ai';
import { Layout, Map, TourPreview } from '../../shared/components';
import { SearchTourForm } from './SearchTourForm';
import { BsEmojiHeartEyes, BsPatchCheck } from 'react-icons/bs';
import { Box, MenuItem, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../shared/custom-hooks';
import './Tours.css';
import { useDestinationContext } from '../../shared/context/destinationsContext';

export const Tours = () => {
	const location = useLocation();

	const {
		sort,
		setSort,
		numberOfVisitors,
		selectedRegions,
		selectedActivities,
		selectedPrices,
		createDestinationUrl,
	} = useDestinationContext();

	const url = '/destinations';
	const [destinationUrl, setDestinationUrl] = useState(
		createDestinationUrl(
			url,
			selectedRegions,
			selectedActivities,
			selectedPrices,
			numberOfVisitors
		)
	);

	const {
		isLoading,
		isError,
		data: destinations,
		refetch,
	} = useFetch('get-destinations', destinationUrl);

	useEffect(() => {
		const newDestinationUrl = createDestinationUrl(
			url,
			selectedRegions,
			selectedActivities,
			selectedPrices,
			numberOfVisitors
		);
		setDestinationUrl(newDestinationUrl);
	}, [
		url,
		selectedRegions,
		selectedActivities,
		selectedPrices,
		numberOfVisitors,
	]);
	useEffect(() => {
		refetch();
	}, [destinationUrl]);

	return (
		<Layout>
			<main>
				<section>
					<div className="max-w-container mt-16 mb-4 space-y-9">
						<div className="flex items-center justify-between">
							<h1 className="text-6xl font-semibold font-heading">
								Explore Through Locals
							</h1>

							<Box width={'250px'}>
								<TextField
									label="Sort By"
									select
									value={sort}
									onChange={(e) => setSort(e.target.value)}
									fullWidth
								>
									<MenuItem value="popular">Popular</MenuItem>
									<MenuItem value="low to high">Price: Low to High</MenuItem>
									<MenuItem value="high to low">Price: High to Low</MenuItem>
								</TextField>
							</Box>
						</div>

						<div className="flex items-center justify-between p-8 px-16 bg-[#F8F8F8] rounded-lg">
							<p className="tag-item">
								<BsPatchCheck className="tag-icon" />{' '}
								<span className="tag-title">Trusted Locals</span>
							</p>
							<p className="tag-item">
								<BsEmojiHeartEyes className="tag-icon" />{' '}
								<span className="tag-title">Authentic Experience</span>
							</p>
							<p className="tag-item">
								<AiOutlineLock className="tag-icon" />{' '}
								<span className="tag-title">Safe and Secure</span>
							</p>
							<p className="tag-item">
								<AiOutlineDollar className="tag-icon" />{' '}
								<span className="tag-title">Affordable</span>
							</p>
						</div>
					</div>
				</section>

				<section className="mb-10">
					<div className="max-w-container grid grid-cols-3 gap-14">
						<div className="col-span-1 py-5 space-y-4">
							<div className="w-full h-[12rem] img-bg sidebar-border overflow-hidden">
								<Map />
							</div>

							<SearchTourForm />
						</div>

						<div className="col-span-2 p-5 pr-0 space-y-8">
							{isLoading || isError ? (
								<>
									<p>loading</p>
								</>
							) : (
								destinations.map((item, i) => (
									<div key={i}>
										<TourPreview item={item} />
									</div>
								))
							)}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};
