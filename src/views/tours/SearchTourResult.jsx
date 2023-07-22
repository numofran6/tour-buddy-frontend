import React, { useEffect, useState } from 'react';
import { useFetch } from '../../shared/custom-hooks';
import { useDestinationContext } from '../../shared/context/destinationsContext';
import { TourPreview } from '../../shared/components';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { BsChevronLeft, BsChevronRight, BsEmojiFrown } from 'react-icons/bs';

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

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const totalPages = Math.ceil(destinations?.length / itemsPerPage);

	const getCurrentPageItems = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return destinations.slice(startIndex, endIndex);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) => prevPage + 1);
			window.scrollTo({
				top: 300,
				left: 0,
				behavior: 'smooth',
			});
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
			window.scrollTo({
				top: 300,
				left: 0,
				behavior: 'smooth',
			});
		}
	};

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
				<>
					{getCurrentPageItems().map((item, i) => (
						<div key={i}>
							<TourPreview item={item} />
						</div>
					))}

					<div className="pt-1" />

					<div className="flex items-center justify-center space-x-10">
						<Button
							disabled={currentPage === 1}
							onClick={handlePrevPage}
							style={{ backgroundColor: 'white' }}
							size="large"
							className={`${currentPage > 1 && 'shadow'}`}
						>
							<BsChevronLeft className="my-2 w-5 h-5" />
						</Button>

						<p className="text-center text-gray-500">
							Page {currentPage} of {totalPages}
						</p>

						<Button
							disabled={currentPage === totalPages}
							onClick={handleNextPage}
							style={{ backgroundColor: 'white' }}
							size="large"
							className={`${currentPage < totalPages && 'shadow'}`}
						>
							<BsChevronRight className="my-2 w-5 h-5" />
						</Button>
					</div>
				</>
			)}
		</div>
	);
};
