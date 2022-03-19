import { createContext, useContext, useReducer, useEffect } from 'react';
import { authReducer } from '../../Reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, {
		token: null,
		user: null,
	});

	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = JSON.parse(localStorage.getItem('user'));
		authDispatch({ type: 'INITIAL', payload: { token, user } });
	}, []);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
