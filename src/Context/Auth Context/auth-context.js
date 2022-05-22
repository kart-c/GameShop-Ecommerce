import { createContext, useContext, useReducer, useEffect } from 'react';
import { authReducer } from '../../Reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, {
		token: localStorage.getItem('token') || null,
		user: JSON.parse(localStorage.getItem('user')) || null,
		address: [],
		orders: [],
	});

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
