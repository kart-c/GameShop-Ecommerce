import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../../Reducer';

const FilterContext = createContext({
	price: 5000,
	category: [],
	rating: 1,
	sortBy: null,
	outOfStock: false,
});

const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, {
		price: 5000,
		category: [],
		rating: null,
		sortBy: null,
		outOfStock: false,
	});

	return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
