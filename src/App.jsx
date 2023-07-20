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
