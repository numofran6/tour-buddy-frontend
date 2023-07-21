import { useEffect, useMemo, useState } from 'react';
import { AiOutlineDollar, AiOutlineLock } from 'react-icons/ai';
import { Layout, Map, TourPreview } from '../../shared/components';
import { SearchTourForm } from './SearchTourForm';
import { BsEmojiHeartEyes, BsPatchCheck } from 'react-icons/bs';
import { Box, MenuItem, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../shared/custom-hooks';
import './Tours.css';

const createQueryString = (param, values) => {
	return values
		.map((value) => `${param}=${encodeURIComponent(value)}`)
		.join('&');
};

// Function to create the price query string
const createPriceQueryString = (selectedPrices) => {
	const sortedPrices = selectedPrices.sort(
		(a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])
	);
	const lowestPrice = sortedPrices[0].split('-')[0];
	const highestPrice = sortedPrices[sortedPrices.length - 1].split('-')[1];

	return `price=${encodeURIComponent(lowestPrice)}-${encodeURIComponent(
		highestPrice
	)}`;
};

// Function to create the visitors query string
const createVisitorsQueryString = (numberOfVisitors) => {
	const [minVisitors, maxVisitors] = numberOfVisitors;
	return `min=${encodeURIComponent(minVisitors)}&max=${encodeURIComponent(
		maxVisitors
	)}`;
};

// Function to create the URL based on selected options
const createDestinationUrl = (
	url,
	selectedRegions,
	selectedActivities,
	selectedPrices,
	numberOfVisitors
) => {
	const selectedRegionsQueryString = createQueryString(
		'region',
		selectedRegions
	);
	const selectedActivitiesQueryString = createQueryString(
		'activity',
		selectedActivities
	);
	const priceQueryString = createPriceQueryString(selectedPrices);
	const visitorsQueryString = createVisitorsQueryString(numberOfVisitors);

	const queryParams = [
		selectedRegionsQueryString,
		// selectedActivitiesQueryString,
		priceQueryString,
		visitorsQueryString,
	];
	const queryString = queryParams.filter(Boolean).join('&');

	return queryString ? `${url}/?${queryString}` : url;
};

export const Tours = () => {
	const regionsOptions = [
		{ value: 'Greater Accra Region', label: 'Greater Accra' },
		{ value: 'Volta Region', label: 'Volta' },
		{ value: 'Northern Region', label: 'Northern' },
		{ value: 'Western Region', label: 'Western' },
	];

	const activitiesOptions = [
		{ value: 'park', label: 'Park' },
		{ value: 'beach', label: 'Beach' },
		{ value: 'walk', label: 'Long Walk' },
	];

	const pricesOptions = [
		{ value: '0-20', label: 'Less than $20' },
		{ value: '20-50', label: '$20 - $50' },
		{ value: '50-9999', label: 'Above $50' },
	];

	const location = useLocation();
	const [sort, setSort] = useState('');
	const [numberOfVisitors, setNumberOfVisitors] = useState([1, 50]);
	const [selectedRegions, setSelectedRegions] = useState(
		regionsOptions.map((option) => option.value)
	);
	const [selectedActivities, setSelectedActivities] = useState(
		activitiesOptions.map((option) => option.value)
	);
	const [selectedPrices, setSelectedPrices] = useState(
		pricesOptions.map((option) => option.value)
	);
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

							<SearchTourForm
								{...{
									numberOfVisitors,
									setNumberOfVisitors,
									selectedRegions,
									setSelectedRegions,
									selectedActivities,
									setSelectedActivities,
									selectedPrices,
									setSelectedPrices,
									regionsOptions,
									activitiesOptions,
									pricesOptions,
								}}
							/>
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
