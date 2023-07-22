import React, { useEffect, useState } from 'react';
import { useFetch } from '../../shared/custom-hooks';
import { useDestinationContext } from '../../shared/context/destinationsContext';
import { TourPreview } from '../../shared/components';
import { CircularProgress } from '@mui/material';
import { BsEmojiFrown } from 'react-icons/bs';

export const SearchTourResult = () => {
	const {
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
		<div className="col-span-2 p-5 pr-0 space-y-8">
			{isLoading || isError ? (
				<div className="flex justify-center">
					<CircularProgress sx={{ color: '#081922' }} size={40} />
				</div>
			) : destinations.length === 0 ? (
				<div className="flex flex-col items-center space-y-3">
					<h1 className="text-4xl flex items-center space-x-3 text-[#295B5F]">
						<BsEmojiFrown className="w-10 h-10" /> <span>No Results</span>
					</h1>
					<h4 className="text-sm text-gray-400">
						Please explore our other exciting packages
					</h4>
				</div>
			) : (
				destinations.map((item, i) => (
					<div key={i}>
						<TourPreview item={item} />
					</div>
				))
			)}
		</div>
	);
};
