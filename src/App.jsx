import { Route, Routes } from 'react-router-dom';
import { About, BookedTours, Home, TourDetails, Tours } from './views';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tours" element={<Tours />} />
				<Route path="/tour/:tourid" element={<TourDetails />} />
				<Route path="/booked-tours" element={<BookedTours />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
