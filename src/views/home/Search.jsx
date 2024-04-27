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
import { Select } from '../../shared/components';
import { displayError } from '../../shared/utils';

export default () => {
	const navigate = useNavigate();
	const {
		setSelectedRegions,
		setNumberOfVisitors,
		setSelectedActivities,
		regionsOptions,
		activitiesOptions,
	} = useDestinationContext();
	const [isLoading, setIsLoading] = useState(false);

	const numberOfTourists = [
		{ value: '1 - 25', label: '1 - 25' },
		{ value: '25 - 50', label: '25 - 50' },
	];

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
		<div className="search-container max-w-container">
			<div>
				<h1>Book your tour</h1>
				<p>There are many tours tailored to give you the best experience.</p>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="header-search-form px-7">
					<div>
						<Select
							value={
								region ? (
									region
								) : (
									<>
										<SlLocationPin className="search-input-icon" />
										<span>Select Region</span>
									</>
								)
							}
							options={regionsOptions}
							onChange={setRegion}
						/>
						{formError.region && !region && displayError('Required')}
					</div>

					<div>
						<Select
							value={
								activity ? (
									activity
								) : (
									<>
										<GoTelescope className="search-input-icon" />{' '}
										<span>Select Activity</span>
									</>
								)
							}
							options={activitiesOptions}
							onChange={setActivity}
						/>
						{formError.activity && !activity && displayError('Required')}
					</div>

					<div>
						<Select
							value={
								maxTourists ? (
									maxTourists
								) : (
									<>
										<RxPerson className="search-input-icon" />{' '}
										<span>Number of People</span>
									</>
								)
							}
							options={numberOfTourists}
							onChange={setMaxTourists}
						/>
						{formError.maxTourists && !maxTourists && displayError('Required')}
					</div>
				</div>

				<button type="submit" className="primary-btn mt-16">
					{isLoading ? (
						<CircularProgress sx={{ color: '#f4eaf4' }} size={24} />
					) : (
						<span>Search Tour</span>
					)}
				</button>
			</form>
		</div>
	);
};
