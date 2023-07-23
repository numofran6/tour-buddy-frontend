import React from 'react';
import { Layout } from '../../shared/components';
import { useBookedToursContext } from '../../shared/context/bookedToursContext';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BookedTourPreview } from './BookedTourPreview';
import './BookedTours.css';

export const BookedTours = () => {
	const {
		states: { tours },
		dispatch,
	} = useBookedToursContext();

	return (
		<>
			{tours ? (
				<Layout>
					<main className="max-w-container min-h-[70vh] py-8 mb-20">
						<div className="mb-16 space-y-1">
							<h1 className="text-6xl font-semibold font-heading">
								Manage Booked Tours
							</h1>
							<h6>
								We can't wait to meet you and give you an experience of your
								life.
							</h6>
						</div>

						<div className="grid grid-cols-2 gap-20">
							{tours?.map((tour) => (
								<div key={tour.title}>
									<BookedTourPreview item={tour} dispatch={dispatch} />
								</div>
							))}
						</div>
					</main>
				</Layout>
			) : (
				<Layout>
					<div className="no-page-container">
						<h1 className="text-4xl font-heading">
							You haven't booked any tour yet.
						</h1>

						<Link to={'/tours'}>
							<Button>Explore Destinations</Button>
						</Link>
					</div>
				</Layout>
			)}
		</>
	);
};