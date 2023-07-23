import { FaMapPin } from 'react-icons/fa';
import { IconButton, Rating } from '@mui/material';

export const BookedTourPreview = ({ item }) => {
	return (
		<div className="booked-tour-preview">
			<div className="space-y-1">
				<h1 className="font-heading text-3xl">{item.title}</h1>

				<h6 className="flex items-center space-x-1">
					<FaMapPin className="text-amber-500" /> <span>{item.region}</span>
				</h6>

				<Rating
					value={item.rating}
					precision={0.5}
					size="small"
					readOnly
					className="mr-1"
				/>

				<div className="text-sm flex items-center justify-between">
					<h6>
						<span className="font-semibold">Date:</span> {item.bookingDate}
					</h6>

					<h6>
						<span className="font-semibold">Tour Buddy:</span> {item.tourBuddy}
					</h6>
				</div>
			</div>

			<p className="text-xs">{item.desc}</p>

			<div className="flex justify-end">
				<IconButton
					style={{ color: '#fcfcfc', backgroundColor: '#295B5F' }}
					className="w-24 h-24 rounded-full flex flex-col justify-center"
				>
					<p className="text-xs">Delete</p>
				</IconButton>
			</div>
		</div>
	);
};
