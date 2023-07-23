import { useState } from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { RxPerson } from 'react-icons/rx';
import { GoTelescope } from 'react-icons/go';
import {
	Autocomplete,
	CircularProgress,
	IconButton,
	Stack,
	TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDestinationContext } from '../../shared/context/destinationsContext';

export const Search = () => {
	const navigate = useNavigate();
	const {
		setSelectedRegions,
		setNumberOfVisitors,
		setSelectedActivities,
		regionsOptions,
		activitiesOptions,
	} = useDestinationContext();
	const [isLoading, setIsLoading] = useState(false);

	const numberOfTourists = ['1 - 25', '25 - 50'];

	const [region, setRegion] = useState(null);
	const [activity, setActivity] = useState(null);
	const [maxTourists, setMaxTourists] = useState(null);
	const [formError, setFormError] = useState({
		region: false,
		activity: false,
		maxTourists: false,
	});

	const validateForm = () => {
		if (region && activity && maxTourists) {
			return true;
		} else {
			if (!region) {
				setFormError((p) => ({ ...p, region: true }));
			}
			if (!activity) {
				setFormError((p) => ({ ...p, activity: true }));
			}
			if (!maxTourists) {
				setFormError((p) => ({ ...p, maxTourists: true }));
			}

			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		if (validateForm()) {
			setIsLoading(true);
			const maxPeople = maxTourists.split('-');
			setNumberOfVisitors(maxPeople);
			setSelectedRegions([region]);
			setSelectedActivities([activity]);

			navigate('/tours');

			setMaxTourists(null);
			setRegion(null);
			setActivity(null);
		} else {
			setIsLoading(false);
		}
	};

	return (
		<div className="search-container">
			<form onSubmit={handleSubmit} className="flex items-center space-x-12">
				<Stack width="200px">
					<Autocomplete
						options={regionsOptions.map((region) => region.value)}
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
								error={formError.region && !region}
							/>
						)}
						value={region}
						onChange={(e, newValue) => setRegion(newValue)}
					/>

					{formError.region && !region && (
						<p className="text-red-400 text-xs">Required *</p>
					)}
				</Stack>

				<Stack width="200px">
					<Autocomplete
						options={activitiesOptions.map((region) => region.label)}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label={
									<div className="search-input-label">
										<GoTelescope className="search-input-icon" />{' '}
										<span>Select Activity</span>
									</div>
								}
								style={{
									borderBottom: '1px solid white',
								}}
								error={formError.activity && !activity}
							/>
						)}
						value={activity}
						onChange={(e, newValue) => setActivity(newValue)}
					/>

					{formError.activity && !activity && (
						<p className="text-red-400 text-xs">Required *</p>
					)}
				</Stack>

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
								error={formError.maxTourists && !maxTourists}
							/>
						)}
						value={maxTourists}
						onChange={(e, newValue) => setMaxTourists(newValue)}
					/>

					{formError.maxTourists && !maxTourists && (
						<p className="text-red-400 text-xs">Required *</p>
					)}
				</Stack>

				<IconButton
					type="submit"
					style={{ color: '#fcfcfc', backgroundColor: '#081921' }}
					className="w-24 h-24 rounded-full flex flex-col justify-center"
				>
					{isLoading ? (
						<CircularProgress sx={{ color: '#f4eaf4' }} size={24} />
					) : (
						<p className="text-xs uppercase text-center">Search Tour</p>
					)}
				</IconButton>
			</form>
		</div>
	);
};
