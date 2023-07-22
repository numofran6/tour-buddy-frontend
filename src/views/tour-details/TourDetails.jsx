import { FaMapPin } from 'react-icons/fa';
import { Layout } from '../../shared/components';
import { Button, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BsEmojiFrownFill } from 'react-icons/bs';

export const TourDetails = () => {
	const location = useLocation();
	const tour = location.state?.tour;

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	if (!tour) {
		return (
			<Layout>
				<div className="min-h-[60vh] flex flex-col items-center justify-center space-y-5">
					<BsEmojiFrownFill className="w-20 h-20" />
					<h1 className="text-4xl font-heading">404. TOUR NOT FOUND</h1>
				</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<main className="max-w-container space-y-5 py-3">
				<div>
					<h1 className="font-heading text-5xl">{tour?.title}</h1>
					<h4 className="flex items-center space-x-1 text-xl">
						<FaMapPin className="text-[#B35C00] w-5 h-5" />{' '}
						<span>{tour?.region}</span>
					</h4>
				</div>

				<div className="flex items-center justify-between">
					<p className="max-w-3xl text-sm text-[#295B5F]">{tour?.desc}</p>

					<IconButton
						style={{ color: '#fcfcfc', backgroundColor: '#295B5F' }}
						className="w-24 h-24 rounded-full flex flex-col justify-center"
					>
						<p className="text-xs uppercase text-center">Book Tour</p>
					</IconButton>
				</div>

				<div className="grid grid-cols-3 gap-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i}>
							<img
								src=""
								alt="Tour Image"
								className="w-full h-[14rem] img-bg"
							/>
						</div>
					))}
				</div>
			</main>
		</Layout>
	);
};
