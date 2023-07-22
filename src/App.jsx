import { Route, Routes } from 'react-router-dom';
import { Home, TourDetails, Tours } from './views';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tours" element={<Tours />} />
				<Route path="/tour/:tourid" element={<TourDetails />} />
			</Routes>
		</>
	);
}

export default App;
