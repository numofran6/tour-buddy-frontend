import { AiOutlineDollar, AiOutlineLock } from 'react-icons/ai';
import { Layout, Map } from '../../shared/components';
import { SearchTourForm } from './SearchTourForm';
import { BsEmojiHeartEyes, BsPatchCheck } from 'react-icons/bs';
import { Box, MenuItem, TextField } from '@mui/material';
import { useDestinationContext } from '../../shared/context/destinationsContext';
import { SearchTourResult } from './SearchTourResult';
import { useEffect } from 'react';
import './Tours.css';

export const Tours = () => {
	const { sort, setSort } = useDestinationContext();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<Layout>
			<main className="mb-20">
				<section>
					<div className="max-w-container mt-8 mb-4 space-y-9">
						<div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between padding-x">
							<h1 className="text-4xl lg:text-6xl font-semibold font-heading">
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

						<div className="hidden md:flex md:items-center md:justify-between p-8 lg:px-16 bg-[#F8F8F8] rounded-lg">
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
					<div className="max-w-container lg:grid lg:grid-cols-3 lg:gap-14 px-2">
						<div className="col-span-1 py-5 space-y-4">
							<div className="w-full h-[12rem] img-bg sidebar-border overflow-hidden">
								<Map />
							</div>

							<SearchTourForm />
						</div>

						<SearchTourResult />
					</div>
				</section>
			</main>
		</Layout>
	);
};
