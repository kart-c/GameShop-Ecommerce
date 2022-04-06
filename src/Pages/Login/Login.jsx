import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import { useAuth, useCart, useWishlist } from '../../Context';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { fetchCartProducts, fetchWishlist } from '../../Utils';

const Login = () => {
	const { authDispatch } = useAuth();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const emailRef = useRef();

	const navigate = useNavigate();

	const { cartDispatch } = useCart();

	const { wishlistDispatch } = useWishlist();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	const guestLoginHandler = () => {
		setFormData((prev) => ({
			...prev,
			email: 'adarshbalika@gmail.com',
			password: 'adarshBalika123',
		}));
	};

	const formSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/auth/login', {
				email: formData.email,
				password: formData.password,
			});
			if (response.status === 200) {
				authDispatch({
					type: 'LOGIN',
					payload: { token: response.data.encodedToken, user: response.data.foundUser },
				});
				localStorage.setItem('token', response.data.encodedToken);
				localStorage.setItem('user', JSON.stringify(response.data.foundUser));
				fetchCartProducts(response.data.encodedToken, cartDispatch);
				fetchWishlist(response.data.encodedToken, wishlistDispatch);
				navigate(-1);
				alert('Logged in');
			} else {
				console.error('ERROR: ', response);
				alert('ERROR');
			}
		} catch (error) {
			alert('ERROR');
			console.error(error);
		}
	};

	return (
		<>
			<Header />
			<main>
				<form>
					<div className={styles.loginContainer}>
						<h3>Login</h3>
						<div className={`input-container ${styles.inputContainer}`}>
							<label htmlFor="email">Email Address *</label>
							<input
								ref={emailRef}
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								autoComplete="off"
							/>
						</div>
						<div className={`input-container ${styles.inputContainer}`}>
							<label htmlFor="password">Password *</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Enter your password"
								value={formData.password}
								onChange={(e) => setFormData({ ...formData, password: e.target.value })}
							/>
						</div>
						<span>Forgot password?</span>
						<div className={`checkbox-container ${styles.checkboxContainer}`}>
							<input type="checkbox" name="disabled example input" id="checkbox-1" />
							<label htmlFor="checkbox-1">Remember me</label>
						</div>
						<button
							className={`btn ${styles.guestLogin}`}
							type="button"
							onClick={guestLoginHandler}
						>
							Log In with guest credentials
						</button>
						<button className={`btn ${styles.btn}`} type="submit" onClick={formSubmitHandler}>
							Log In
						</button>
						<div className={styles.spacer}>
							<span>OR</span>
						</div>
						<button className={`btn ${styles.btn} ${styles.secondary}`}>
							<Link to="/signup">Sign Up</Link>
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default Login;
