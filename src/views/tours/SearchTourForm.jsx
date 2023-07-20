import { Box, Slider } from '@mui/material';
import { useState } from 'react';

export const SearchTourForm = () => {
	const [numberOfVisitors, setNumberOfVisitors] = useState([1, 50]);

	const handleVistiorsChange = (event, newValue) => {
		setNumberOfVisitors(newValue);
	};

	return (
		<form className="p-5 py-1 text-sm bg-white sidebar-border">
			<div className="form-group border-b border-gray-100">
				<h1 className="form-group-heading">Region</h1>

				<div className="form-group-content">
					<label className="label-item">
						<input
							type="radio"
							name="region"
							id="region"
							value="Greater Accra Region"
						/>
						<span>Greater Accra</span>
					</label>

					<label className="label-item">
						<input
							type="radio"
							name="region"
							id="region"
							value="Volta Region"
						/>
						<span>Volta</span>
					</label>

					<label className="label-item">
						<input
							type="radio"
							name="region"
							id="region"
							value="Northern Region"
						/>
						<span>Northern</span>
					</label>

					<label className="label-item">
						<input
							type="radio"
							name="region"
							id="region"
							value="Western Region"
						/>
						<span>Western</span>
					</label>
				</div>
			</div>

			<div className="form-group border-b border-gray-100">
				<h1 className="form-group-heading">Type of Activity</h1>

				<div className="form-group-content">
					<label className="label-item">
						<input type="checkbox" name="activity" value="park" />
						<span>Park</span>
					</label>

					<label className="label-item">
						<input type="checkbox" name="activity" value="beach" />
						<span>Beach</span>
					</label>

					<label className="label-item">
						<input type="checkbox" name="activity" value="walk" />
						<span>Long Walk</span>
					</label>
				</div>
			</div>

			<div className="form-group border-b border-gray-100">
				<h1 className="form-group-heading">Price</h1>

				<div className="form-group-content">
					<label className="label-item">
						<input type="radio" name="price" value="0-20" />
						<span>Less than $20</span>
					</label>

					<label className="label-item">
						<input type="radio" name="price" value="20-50" />
						<span>$20 - $50</span>
					</label>

					<label className="label-item">
						<input type="radio" name="price" value="50-9999" />
						<span>Above $50</span>
					</label>
				</div>
			</div>

			<div className="form-group">
				<h1 className="form-group-heading">Number of Visitors</h1>

				<div className="flex items-center space-x-5">
					<h4 className="number-of-visitors">{numberOfVisitors[0]}</h4>

					<Box sx={{ width: 200 }}>
						<Slider
							getAriaLabel={() => 'Number of people range'}
							getAriaValueText={valuetext}
							value={numberOfVisitors}
							onChange={handleVistiorsChange}
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

function valuetext(value) {
	return value;
}
