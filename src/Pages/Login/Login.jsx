import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import './Login.css';

const Login = () => {
	return (
		<>
			<Header />
			<main>
				<div className="login-container">
					<h3>Login</h3>
					<div className="input-container">
						<label htmlFor="email">Email Address *</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>
					<div className="input-container">
						<label htmlFor="password">Password *</label>
						<input type="text" id="password" name="password" placeholder="Enter your password" />
					</div>
					<span>Forgot password?</span>
					<div className="checkbox-container">
						<input type="checkbox" name="disabled example input" id="checkbox-1" />
						<label htmlFor="checkbox-1">Remember me</label>
					</div>
					<button className="btn">Log In</button>
					<div className="spacer">
						<span>OR</span>
					</div>
					<button className="btn secondary">
						<Link to="/signup">Sign Up</Link>
					</button>
				</div>
			</main>
		</>
	);
};

export default Login;