import { AiOutlineDollar, AiOutlineLock } from 'react-icons/ai';
import { Layout, Map } from '../../shared/components';
import { SearchTourForm } from './SearchTourForm';
import { BsEmojiHeartEyes, BsPatchCheck } from 'react-icons/bs';
import { Box, MenuItem, TextField } from '@mui/material';
import { useDestinationContext } from '../../shared/context/destinationsContext';
import './Tours.css';
import { SearchTourResult } from './SearchTourResult';

export const Tours = () => {
	const { sort, setSort } = useDestinationContext();

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

						<SearchTourResult />
					</div>
				</section>
			</main>
		</Layout>
	);
};
