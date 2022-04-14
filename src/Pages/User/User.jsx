import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Header } from '../../Components';
import { useAuth, useCart, useWishlist } from '../../Context';

const User = () => {
	const { authDispatch } = useAuth();

	const { cartDispatch } = useCart();

	const { wishlistDispatch } = useWishlist();

	const navigate = useNavigate();

	const logoutHandler = () => {
		toast.success('Logged out');
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		authDispatch({ type: 'LOGOUT' });
		cartDispatch({ type: 'LOGOUT' });
		wishlistDispatch({ type: 'LOGOUT' });
		navigate('/');
	};

	return (
		<>
			<Header />
			<button
				style={{ marginTop: '10rem', marginLeft: '10rem' }}
				className="btn btn-info"
				onClick={logoutHandler}
			>
				Logout
			</button>
		</>
	);
};

export { User };
