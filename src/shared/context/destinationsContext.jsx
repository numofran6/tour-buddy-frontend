import React, { createContext, useContext, useState } from 'react';

const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
	function createQueryString(param, values) {
		return values
			.map((value) => `${param}=${encodeURIComponent(value)}`)
			.join('&');
	}

	function createPriceQueryString(selectedPrices) {
		const sortedPrices = selectedPrices.sort(
			(a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])
		);
		const lowestPrice = sortedPrices[0].split('-')[0];
		const highestPrice = sortedPrices[sortedPrices.length - 1].split('-')[1];

		return `price=${encodeURIComponent(lowestPrice)}-${encodeURIComponent(
			highestPrice
		)}`;
	}

	function createVisitorsQueryString(numberOfVisitors) {
		const [minVisitors, maxVisitors] = numberOfVisitors;
		return `min=${encodeURIComponent(minVisitors)}&max=${encodeURIComponent(
			maxVisitors
		)}`;
	}

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

	return (
		<DestinationContext.Provider
			value={{
				sort,
				setSort,
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
				createDestinationUrl,
			}}
		>
			{children}
		</DestinationContext.Provider>
	);
};

export const useDestinationContext = () => {
	return useContext(DestinationContext);
};
