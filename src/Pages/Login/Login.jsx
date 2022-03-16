import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import styles from './Login.module.css';

const Login = () => {
	return (
		<>
			<Header />
			<main>
				<div className={styles.loginContainer}>
					<h3>Login</h3>
					<div className={`input-container ${styles.inputContainer}`}>
						<label htmlFor="email">Email Address *</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>
					<div className={`input-container ${styles.inputContainer}`}>
						<label htmlFor="password">Password *</label>
						<input type="text" id="password" name="password" placeholder="Enter your password" />
					</div>
					<span>Forgot password?</span>
					<div className={`checkbox-container ${styles.checkboxContainer}`}>
						<input type="checkbox" name="disabled example input" id="checkbox-1" />
						<label htmlFor="checkbox-1">Remember me</label>
					</div>
					<button className={`btn ${styles.btn}`}>Log In</button>
					<div className={styles.spacer}>
						<span>OR</span>
					</div>
					<button className={`btn ${styles.btn} ${styles.secondary}`}>
						<Link to="/signup">Sign Up</Link>
					</button>
				</div>
			</main>
		</>
	);
};

export default Login;
