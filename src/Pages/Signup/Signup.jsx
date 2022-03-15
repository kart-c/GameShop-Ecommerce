import React from 'react';
import { Header } from '../../Components';

const Signup = () => {
	return (
		<>
			<Header />
			<main>
				<div className="login-container">
					<h3>Signup</h3>
					<div className="input-container">
						<label for="email">Full Name *</label>
						<input type="email" id="email" name="email" placeholder="Enter your full name" />
					</div>
					<div className="input-container">
						<label for="email">Email Address *</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>
					<div className="input-container">
						<label for="password">Password *</label>
						<input type="text" id="password" name="password" placeholder="Enter your password" />
					</div>
					<div className="input-container">
						<label for="password">Confirm Password *</label>
						<input type="text" id="password" name="password" placeholder="Confirm password" />
					</div>
					<div className="checkbox-container">
						<input type="checkbox" name="disabled example input" id="checkbox-1" />
						<label for="checkbox-1">Accept all terms and conditions</label>
					</div>
					<button className="btn">Sign Up</button>
					<div className="spacer">
						<span>OR</span>
					</div>
					<button className="btn secondary">
						<a href="../login/login.html">Log In</a>
					</button>
				</div>
			</main>
		</>
	);
};

export default Signup;
