import { useCallback, useEffect, useRef, useState } from 'react';
import { Layout } from '../../shared/components';
import { IconButton, MenuItem, Rating, TextField } from '@mui/material';
import { FaMapPin } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsEmojiFrownFill } from 'react-icons/bs';
import { LiaHikingSolid } from 'react-icons/lia';
import { TfiClose } from 'react-icons/tfi';
import { SlCalender } from 'react-icons/sl';
import { DateRange } from 'react-date-range';
import { AiOutlineMail } from 'react-icons/ai';
import { format } from 'date-fns';
import { useFetch } from '../../shared/custom-hooks';
import { useBookedToursContext } from '../../shared/context/bookedToursContext';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './TourDetails.css';

export const TourDetails = () => {
	const location = useLocation();
	const tour = location.state?.tour;
	const [openDate, setOpenDate] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const dateRangeRef = useRef();
	const { dispatch } = useBookedToursContext();
	const navigate = useNavigate();

	const {
		isLoading,
		isError,
		data: tourBuddies,
	} = useFetch('get-tourbuddies', `/tourbuddy?region=${tour?.region}`);

	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const imagesWithDimensions = tour?.images?.map((image) => ({
		src: image,
		width: 4,
		height: 3,
	}));

	// BOOKING FORM
	const [email, setEmail] = useState('');
	const [bookingDate, setBookingDate] = useState(
		`${format(new Date(), 'dd MMMM')} - ${format(new Date(), 'dd MMMM')}`
	);
	const [tourBuddy, setTourBuddy] = useState('');
	const [formError, setFormError] = useState({
		email: { status: false, message: '' },
		bookingDate: { status: false, message: '' },
		tourBuddy: { status: false, message: '' },
	});
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const validateForm = () => {
		if (email && emailPattern.test(email) && bookingDate && tourBuddy) {
			return true;
		} else {
			if (!email) {
				setFormError((p) => ({
					...p,
					email: { status: true, message: 'Email is required' },
				}));
			}
			if (email && !emailPattern.test(email)) {
				setFormError((p) => ({
					...p,
					email: { status: true, message: 'Invalid email address' },
				}));
			}
			if (!bookingDate) {
				setFormError((p) => ({
					...p,
					bookingDate: { status: true, message: 'Select date for your tour' },
				}));
			}
			if (!tourBuddy) {
				setFormError((p) => ({
					...p,
					tourBuddy: { status: true, message: 'Select a tour buddy' },
				}));
			}

			return false;
		}
	};

	const handleBookTourForm = (e) => {
		e.preventDefault();

		if (validateForm()) {
			dispatch({
				type: 'ADD_TOUR',
				payload: { email, bookingDate, tourBuddy, ...tour },
			});
			navigate('/booked-tours');
		}
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

	return (
		<>
			{tour ? (
				<Layout>
					<main className="max-w-container space-y-5 py-8 mb-20">
						<div className="space-y-1">
							<h1 className="font-heading text-5xl">{tour?.title}</h1>
							<h4 className="flex items-center space-x-1 text-xl">
								<FaMapPin className="text-[#B35C00] w-5 h-5" />{' '}
								<span>{tour?.region}</span>
							</h4>
							<div className="flex items-center">
								<span className="font-semibold">Rating:</span>
								<Rating
									value={tour.rating}
									precision={0.5}
									size="small"
									readOnly
									className="ml-2"
								/>
							</div>
							<h6>
								<span className="font-semibold">Price:</span> ${tour.price}
							</h6>
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

						<Gallery photos={imagesWithDimensions} onClick={openLightbox} />

						<ModalGateway>
							{viewerIsOpen ? (
								<Modal onClose={closeLightbox}>
									<Carousel
										currentIndex={currentImage}
										views={imagesWithDimensions}
									/>
								</Modal>
							) : null}
						</ModalGateway>
					</main>

					{openModal && (
						<div className="book-tour-modal">
							<div className="book-tour-modal-container">
								<div className="flex justify-end mb-10">
									<button onClick={() => setOpenModal(false)}>
										<TfiClose className="modal-close-btn gb-transition" />
									</button>
								</div>

								<form
									onSubmit={handleBookTourForm}
									className="space-y-7 w-[80%] mx-auto"
								>
									<TextField
										fullWidth
										label={
											<label className="flex items-center space-x-3">
												<AiOutlineMail className="w-5 h-5" />{' '}
												<span>Email Address</span>
											</label>
										}
										variant="filled"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										error={formError.email.status && !emailPattern.test(email)}
										helperText={
											formError.email.status &&
											!emailPattern.test(email) &&
											formError.email.message
										}
									/>

									<TextField
										select
										label={
											<label className="flex items-center space-x-3">
												<LiaHikingSolid className="w-5 h-5" />{' '}
												<span>Select Guide</span>
											</label>
										}
										value={tourBuddy}
										onChange={(e) => setTourBuddy(e.target.value)}
										fullWidth
										variant="filled"
										error={formError.tourBuddy.status && !tourBuddy}
										helperText={
											formError.tourBuddy.status &&
											!tourBuddy &&
											formError.tourBuddy.message
										}
									>
										{tourBuddies?.map((tourBuddy) => (
											<MenuItem value={tourBuddy.name} key={tourBuddy.name}>
												<img
													src={tourBuddy.image}
													alt=""
													className="img-bg w-10 h-10 mr-2 object-cover"
												/>{' '}
												<span>{tourBuddy.name}</span>
											</MenuItem>
										))}
									</TextField>

									<div className="relative">
										<div className="flex items-center space-x-3 border border-gray-300 rounded-t">
											<div
												onClick={(event) => {
													event.stopPropagation();
													setOpenDate(!openDate);
												}}
												className="calendar-container gb-transition"
											>
												<SlCalender className="calender-icon" />
											</div>
											<div className="flex flex-col">
												<label className="text-xs text-gray-700">
													Select Days
												</label>
												<span>{bookingDate}</span>
											</div>
										</div>
										{openDate && (
											<div ref={dateRangeRef} className="shadow-md">
												<DateRange
													editableDateInputs={true}
													onChange={(item) => {
														setBookingDate(
															`${format(
																item.selection.startDate,
																'dd MMMM'
															)} - ${format(item.selection.endDate, 'dd MMMM')}`
														);
													}}
													moveRangeOnFirstSelection={false}
													ranges={[
														{
															startDate: new Date(),
															endDate: new Date(),
															key: 'selection',
														},
													]}
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
				</Layout>
			) : (
				<Layout>
					<div className="no-page-container">
						<BsEmojiFrownFill className="w-20 h-20" />
						<h1 className="text-4xl font-heading">404 | Tour Not Found</h1>
					</div>
				</Layout>
			)}
		</>
	);
};
