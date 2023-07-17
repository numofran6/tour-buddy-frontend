import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { SlLocationPin } from 'react-icons/sl';
import { RxPerson } from 'react-icons/rx';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineCaretDown } from 'react-icons/ai';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
	Autocomplete,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
} from '@mui/material';

export const Search = () => {
	const [openDate, setOpenDate] = useState(false);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const allRegions = ['Greater Accra', 'Kumasi', 'Volta'];
	const numberOfTourists = ['10', '20', '30'];
	const [region, setRegion] = useState('');
	const [tourists, setTourists] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="py-16 bg-[#295B5F] text-[#fcfcfc] flex flex-col items-center space-y-8">
			<h1 className="font-heading uppercase text-3xl text-center max-w-3xl">
				Get a 20% discount on the first booking of any tour
			</h1>

			<p className="max-w-2xl text-sm text-center">
				When booking any of the tours, use the promo code FIRSTTOUR to apply the
				discount. Note that the discount works only once and only during the
				first booking!
			</p>

			<form onSubmit={handleSubmit} className="flex items-center space-x-12">
				<Stack width="200px">
					<Autocomplete
						options={allRegions}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label={
									<div className="search-input-label">
										<SlLocationPin className="search-input-icon" />{' '}
										<span>Select Region</span>
									</div>
								}
								style={{
									borderBottom: '1px solid white',
								}}
							/>
						)}
						value={region}
						onChange={(e, newValue) => setRegion(newValue)}
					/>
				</Stack>

				<div className="relative">
					<Stack width="200px">
						<span onClick={() => setOpenDate(!openDate)}>
							<TextField
								fullWidth
								variant="standard"
								label={
									<div className="search-input-label">
										<SlCalender className="search-input-icon" />{' '}
										<span>Select Date</span>
									</div>
								}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<AiOutlineCaretDown
												className={`text-[#fcfcfc] w-[0.8rem] h-[0.8rem] ${
													openDate && 'rotate-180'
												}`}
											/>
										</InputAdornment>
									),
								}}
								style={{
									borderBottom: '1px solid white',
								}}
							/>
						</span>
					</Stack>
					{openDate && (
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
					)}
				</div>

				<Stack width="200px">
					<Autocomplete
						options={numberOfTourists}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label={
									<div className="search-input-label">
										<RxPerson className="search-input-icon" />{' '}
										<span>Number of People</span>
									</div>
								}
								style={{
									borderBottom: '1px solid white',
								}}
							/>
						)}
						value={tourists}
						onChange={(e, newValue) => setTourists(newValue)}
					/>
				</Stack>

				<IconButton
					type="submit"
					style={{ color: '#fcfcfc', backgroundColor: '#081921' }}
					className="w-24 h-24 rounded-full flex flex-col justify-center"
				>
					<p className="text-xs uppercase text-center">Search Tour</p>
				</IconButton>
			</form>
		</div>
	);
};
