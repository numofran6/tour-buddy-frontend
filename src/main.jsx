import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DestinationProvider } from './shared/context/destinationsContext.jsx';
import { BookedToursContextProvider } from './shared/context/bookedToursContext.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<DestinationProvider>
					<BookedToursContextProvider>
						<App />
					</BookedToursContextProvider>
				</DestinationProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
