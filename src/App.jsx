import { Route, Routes } from 'react-router-dom';
import { Home, Tours } from './views';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tours" element={<Tours />} />
			</Routes>
		</>
	);
}

export default App;

/**DATE
 * 
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
	const [openDate, setOpenDate] = useState(false);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
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
 */
