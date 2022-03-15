import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';

const Signup = () => {
	return (
		<>
			<Header />
			<main>
				<div className="login-container">
					<h3>Signup</h3>
					<div className="input-container">
						<label htmlFor="email">Full Name *</label>
						<input type="email" id="email" name="email" placeholder="Enter your full name" />
					</div>
					<div className="input-container">
						<label htmlFor="email">Email Address *</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>
					<div className="input-container">
						<label htmlFor="password">Password *</label>
						<input type="text" id="password" name="password" placeholder="Enter your password" />
					</div>
					<div className="input-container">
						<label htmlFor="password">Confirm Password *</label>
						<input type="text" id="password" name="password" placeholder="Confirm password" />
					</div>
					<div className="checkbox-container">
						<input type="checkbox" name="disabled example input" id="checkbox-1" />
						<label htmlFor="checkbox-1">Accept all terms and conditions</label>
					</div>
					<button className="btn">Sign Up</button>
					<div className="spacer">
						<span>OR</span>
					</div>
					<button className="btn secondary">
						<Link to="/login">Log In</Link>
					</button>
				</div>
			</main>
		</>
	);
};

export default Signup;
