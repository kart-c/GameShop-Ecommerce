import React from 'react';
import { Header } from '../../Components';
import './Login.css';

const Login = () => {
	return (
		<>
			<Header />
			<main>
				<div class="login-container">
					<h3>Login</h3>
					<div class="input-container">
						<label for="email">Email Address *</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>
					<div class="input-container">
						<label for="password">Password *</label>
						<input type="text" id="password" name="password" placeholder="Enter your password" />
					</div>
					<span>Forgot password?</span>
					<div class="checkbox-container">
						<input type="checkbox" name="disabled example input" id="checkbox-1" />
						<label for="checkbox-1">Remember me</label>
					</div>
					<button class="btn">Log In</button>
					<div class="spacer">
						<span>OR</span>
					</div>
					<button class="btn secondary">
						<a href="../signup/signup.html">Sign Up</a>
					</button>
				</div>
			</main>
		</>
	);
};

export default Login;
