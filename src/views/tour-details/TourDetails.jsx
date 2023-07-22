import { FaMapPin } from 'react-icons/fa';
import { Layout } from '../../shared/components';
import {
	Box,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { BsEmojiFrownFill, BsFillPersonFill } from 'react-icons/bs';
import { LiaHikingSolid } from 'react-icons/lia';
import { TfiClose } from 'react-icons/tfi';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { SlCalender } from 'react-icons/sl';
import { DateRange } from 'react-date-range';
import './TourDetails.css';
import { AiOutlineMail } from 'react-icons/ai';
import { format } from 'date-fns';

export const TourDetails = () => {
	const location = useLocation();
	const tour = location.state?.tour;

	const [openDate, setOpenDate] = useState(false);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const [age, setAge] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const dateRangeRef = useRef();

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dateRangeRef.current &&
				!dateRangeRef.current.contains(event.target)
			) {
				setOpenDate(false);
			}
		};

		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	if (!tour) {
		return (
			<Layout>
				<div className="h-[60vh] flex flex-col items-center justify-center space-y-5">
					<BsEmojiFrownFill className="w-20 h-20" />
					<h1 className="text-4xl font-heading">404 TOUR NOT FOUND</h1>
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
						onClick={() => setOpenModal(true)}
						style={{ color: '#fcfcfc', backgroundColor: '#295B5F' }}
						className="book-now-btn"
					>
						<p className="book-now-btn-text">Book Tour</p>
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

				{openModal && (
					<div className="book-tour-modal">
						<div className="book-tour-modal-container">
							<div className="flex justify-end mb-10">
								<button onClick={() => setOpenModal(false)}>
									<TfiClose className="modal-close-btn" />
								</button>
							</div>

							<form className="space-y-7 w-[80%] mx-auto">
								<TextField
									fullWidth
									label={
										<label className="flex items-center space-x-3">
											<AiOutlineMail className="w-5 h-5" />{' '}
											<span>Email Address</span>
										</label>
									}
									variant="filled"
								/>

								<TextField
									select
									label={
										<label className="flex items-center space-x-3">
											<LiaHikingSolid className="w-5 h-5" />{' '}
											<span>Select Guide</span>
										</label>
									}
									value={age}
									onChange={handleChange}
									fullWidth
									variant="filled"
								>
									<MenuItem value={10}>
										<img src="" alt="" className="img-bg w-10 h-10 mr-2" />{' '}
										<span>Name Here</span>
									</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
								</TextField>

								<div className="relative">
									<div className="flex items-center space-x-3 border border-gray-300 rounded-t">
										<div
											onClick={(event) => {
												event.stopPropagation();
												setOpenDate(!openDate);
											}}
											className="p-3 py-4 bg-gray-200 cursor-pointer"
										>
											<SlCalender className="calender-icon" />
										</div>
										<div className="flex flex-col">
											<label className="text-xs text-gray-700">
												Select Date
											</label>
											<span>
												{format(dates[0].startDate, 'dd MMMM')} -{' '}
												{format(dates[0].endDate, 'dd MMMM')}
											</span>
										</div>
									</div>
									{openDate && (
										<div ref={dateRangeRef}>
											<DateRange
												editableDateInputs={true}
												onChange={(item) => {
													setOpenDate(false);
													setDates([item.selection]);
												}}
												moveRangeOnFirstSelection={false}
												ranges={dates}
												className="date"
												minDate={new Date()}
											/>
										</div>
									)}
								</div>

								<div className="flex justify-end w-full">
									<IconButton
										type="submit"
										style={{ color: '#fcfcfc', backgroundColor: '#295B5F' }}
										className="book-now-btn"
									>
										<p className="book-now-btn-text">Book Tour</p>
									</IconButton>
								</div>
							</form>
						</div>
					</div>
				)}
			</main>
		</Layout>
	);
};
