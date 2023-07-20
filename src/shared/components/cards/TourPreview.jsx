import { Button, Rating } from '@mui/material';
import { GrLocationPin } from 'react-icons/gr';

export const TourPreview = ({ title, region, rating, desc, price }) => {
	return (
		<div className="h-[15rem] bg-white w-full rounded-md sidebar-border grid grid-cols-3 overflow-hidden">
			<div className="col-span-1 h-full w-full img-bg"></div>
			<div className="p-5 col-span-2 flex flex-col justify-between space-y-3 ">
				<div className="space-y-1">
					<h1 className="text-3xl font-heading font-semibold">{title}</h1>

					<h3 className="flex items-center text-gray-700">
						<GrLocationPin /> <span>{region}</span>
					</h3>

					<Rating
						value={rating}
						precision={0.5}
						size="small"
						readOnly
						className="mr-1"
					/>
				</div>

				<p className="text-xs">{desc}</p>

				<div className="flex items-center justify-between">
					<h6 className="text-xl font-semibold">${price}</h6>

					<Button>Book Now</Button>
				</div>
			</div>
		</div>
	);
};
