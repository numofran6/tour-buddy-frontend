import { useState, useEffect } from 'react';

export const useScroll = (scrollContainerRef, scrollStep = 500) => {
	const [scrollLeft, setScrollLeft] = useState(0);
	const [maxScroll, setMaxScroll] = useState(0);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		setMaxScroll(scrollContainer.scrollWidth - scrollContainer.clientWidth);
		const handleScroll = () => setScrollLeft(scrollContainer.scrollLeft);
		scrollContainer.addEventListener('scroll', handleScroll);
		return () => {
			scrollContainer.removeEventListener('scroll', handleScroll);
		};
	}, [scrollContainerRef]);

	const handleScroll = (scrollOffset) => {
		const scrollContainer = scrollContainerRef.current;
		scrollContainer.scrollTo({
			left: scrollContainer.scrollLeft + scrollOffset,
			behavior: 'smooth',
		});
	};

	const handleNextClick = () => {
		const scrollContainer = scrollContainerRef.current;
		const regions = scrollContainer.querySelectorAll('.regions-content');
		let nextItem = null;

		regions.forEach((region) => {
			if (region.offsetLeft > scrollContainer.scrollLeft) {
				nextItem = region;
				return;
			}
		});

		if (nextItem) {
			const scrollOffset = nextItem.offsetLeft - scrollContainer.scrollLeft;
			handleScroll(scrollOffset);
		} else {
			handleScroll(scrollStep);
		}
	};

	const handlePreviousClick = () => {
		handleScroll(-scrollStep);
	};

	return {
		scrollLeft,
		maxScroll,
		handlePreviousClick,
		handleNextClick,
	};
};
