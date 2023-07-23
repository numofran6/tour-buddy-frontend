import { createContext, useContext, useReducer } from 'react';

export const BookedToursContext = createContext();

const initialState = {
	tours: localStorage.getItem('tours')
		? JSON.parse(localStorage.getItem('tours'))
		: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TOUR': {
			const newTour = action.payload;
			const existItem = state.tours.find(
				(item) => item.title === newTour.title
			);
			const tourItems = existItem
				? state.tours.map((item) =>
						item.title === existItem.title ? newTour : item
				  )
				: [...state.tours, newTour];

			localStorage.setItem('tours', JSON.stringify([...tourItems]));
			return { ...state, tours: [...tourItems] };
		}
		case 'REMOVE_TOUR': {
			const tourToRemove = action.payload;
			const allTours = state.tours.filter(
				(item) => item.title !== tourToRemove.title
			);
			localStorage.setItem('tours', JSON.stringify([...allTours]));
			localStorage.removeItem(`imageData_${tourToRemove.title}`);

			return { ...state, tours: [...allTours] };
		}
	}
};

export const BookedToursContextProvider = ({ children }) => {
	const [states, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<BookedToursContext.Provider value={{ states, dispatch }}>
				{children}
			</BookedToursContext.Provider>
		</>
	);
};

export const useBookedToursContext = () => {
	return useContext(BookedToursContext);
};
