import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import styles from '../Login/Login.module.css';

const Signup = () => {
	return (
		<>
			<Header />
			<main>
				<div className={styles.loginContainer}>
					<h3>Signup</h3>
					<div className={`input-container ${styles.inputContainer}`}>
						<label htmlFor="email">Full Name *</label>
						<input type="email" id="email" name="email" placeholder="Enter your full name" />
					</div>
					<div className={`input-container ${styles.inputContainer}`}>
						<label htmlFor="email">Email Address *</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>
					<div className={`input-container ${styles.inputContainer}`}>
						<label htmlFor="password">Password *</label>
						<input type="text" id="password" name="password" placeholder="Enter your password" />
					</div>
					<div className={`input-container ${styles.inputContainer}`}>
						<label htmlFor="password">Confirm Password *</label>
						<input type="text" id="password" name="password" placeholder="Confirm password" />
					</div>
					<div className={`checkbox-container ${styles.checkboxContainer}`}>
						<input type="checkbox" name="disabled example input" id="checkbox-1" />
						<label htmlFor="checkbox-1">Accept all terms and conditions</label>
					</div>
					<button className={`btn ${styles.btn}`}>Sign Up</button>
					<div className={styles.spacer}>
						<span>OR</span>
					</div>
					<button className={`btn ${styles.btn} ${styles.secondary}`}>
						<Link to="/login">Log In</Link>
					</button>
				</div>
			</main>
		</>
	);
};

export default Signup;
