/**
 * External dependencies
 */
import { Button, Rating } from '@mui/material';
import { GrLocationPin } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export default ({ item }) => {
	const navigate = useNavigate();

	return (
		<div className="lg:h-[15rem] bg-white w-full rounded-md sidebar-border lg:grid lg:grid-cols-3 overflow-hidden">
			<img
				src={item?.images[0]}
				className="h-[15rem] lg:col-span-1 lg:h-full w-full img-bg object-cover cursor-pointer"
				onClick={() =>
					navigate(`/tour/${item.title}`, { state: { tour: item } })
				}
			/>
			<div className="p-5 col-span-2 flex flex-col justify-between space-y-3 ">
				<div className="space-y-1">
					<h1 className="text-3xl font-heading font-semibold">{item.title}</h1>

					<h3 className="flex items-center text-gray-700">
						<GrLocationPin /> <span>{item.region}</span>
					</h3>

					<Rating
						value={item.rating}
						precision={0.5}
						size="small"
						readOnly
						className="mr-1"
					/>
				</div>

				<p className="text-xs">{item.desc.slice(0, 220)}...</p>

				<div className="flex items-center justify-between">
					<h6 className="text-xl font-semibold">${item.price}</h6>

					<a
						onClick={() =>
							navigate(`/tour/${item.title}`, { state: { tour: item } })
						}
					>
						<Button className="text-blue-600 uppercase">View More</Button>
					</a>
				</div>
			</div>
		</div>
	);
};
