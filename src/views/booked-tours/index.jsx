/**
 * External dependencies
 */
import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { Layout } from '../../shared/components';
import { useBookedToursContext } from '../../shared/context';
import { BookedTourPreview } from './BookedTourPreview';
import './index.scss';

export default () => {
	const {
		states: { tours },
		dispatch,
	} = useBookedToursContext();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<Layout>
			{tours.length > 0 ? (
				<main className="max-w-container min-h-[70vh] py-8 mb-20 padding-x">
					<div className="mb-16 space-y-1 title">
						<h1 className="text-4xl lg:text-5xl font-semibold">
							Manage Booked Tours
						</h1>
						<h6 className="mt-2">
							We can't wait to meet you and give you an experience of your life.
						</h6>
					</div>

					<div className="grid lg:grid-cols-2 gap-5 lg:gap-20">
						{tours?.map((tour) => (
							<div key={tour.title}>
								<BookedTourPreview item={tour} dispatch={dispatch} />
							</div>
						))}
					</div>
				</main>
			) : (
				<div className="no-page-container">
					<h1 className="text-5xl font-bold">
						You haven't booked any tour yet.
					</h1>

					<Link to={'/tours'}>
						<Button>Explore Destinations</Button>
					</Link>
				</div>
			)}
		</Layout>
	);
};
