import { Box, Slider } from '@mui/material';

export const SearchTourForm = ({
	numberOfVisitors,
	setNumberOfVisitors,
	selectedRegions,
	setSelectedRegions,
	selectedActivities,
	setSelectedActivities,
	selectedPrices,
	setSelectedPrices,
	regionsOptions,
	activitiesOptions,
	pricesOptions,
}) => {
	const handleCheckboxChange = (e, setSelectedState) => {
		const value = e.target.value;
		setSelectedState((prevSelectedState) => {
			if (prevSelectedState.includes(value)) {
				return prevSelectedState.filter(
					(selectedValue) => selectedValue !== value
				);
			} else {
				return [...prevSelectedState, value];
			}
		});
	};

	return (
		<form className="p-5 py-1 text-sm bg-white sidebar-border">
			<div className="form-group border-b border-gray-100">
				<h1 className="form-group-heading">Region</h1>
				<FormCheckboxGroup
					name="region"
					options={regionsOptions}
					selectedValues={selectedRegions}
					onChange={(e) => handleCheckboxChange(e, setSelectedRegions)}
				/>
			</div>

			<div className="form-group border-b border-gray-100">
				<h1 className="form-group-heading">Type of Activity</h1>
				<FormCheckboxGroup
					name="activity"
					options={activitiesOptions}
					selectedValues={selectedActivities}
					onChange={(e) => handleCheckboxChange(e, setSelectedActivities)}
				/>
			</div>

			<div className="form-group border-b border-gray-100">
				<h1 className="form-group-heading">Price</h1>
				<FormCheckboxGroup
					name="price"
					options={pricesOptions}
					selectedValues={selectedPrices}
					onChange={(e) => handleCheckboxChange(e, setSelectedPrices)}
				/>
			</div>

			<div className="form-group">
				<h1 className="form-group-heading">Number of Visitors</h1>
				<div className="flex items-center space-x-5">
					<h4 className="number-of-visitors">{numberOfVisitors[0]}</h4>
					<Box sx={{ width: 200 }}>
						<Slider
							getAriaLabel={() => 'Number of people range'}
							getAriaValueText={(value) => value}
							value={numberOfVisitors}
							onChange={(e, newValue) => setNumberOfVisitors(newValue)}
							valueLabelDisplay="auto"
							min={1}
							max={50}
						/>
					</Box>
					<h4 className="number-of-visitors">{numberOfVisitors[1]}</h4>
				</div>
			</div>
		</form>
	);
};

function FormCheckboxGroup({ name, options, selectedValues, onChange }) {
	return (
		<div className="form-group-content">
			{options.map((option) => (
				<label key={option.value} className="label-item">
					<input
						type="checkbox"
						name={name}
						value={option.value}
						checked={selectedValues.includes(option.value)}
						onChange={onChange}
					/>
					<span>{option.label}</span>
				</label>
			))}
		</div>
	);
}
