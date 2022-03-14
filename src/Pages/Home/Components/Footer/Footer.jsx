import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer class="lp-footer">
			<div class="lp-footer-text">
				<h4>About US</h4>
				<p>
					Website is an open source project. To contribute <a href="#">Click here</a>.
				</p>
			</div>
			<ul class="footer-nav-links">
				<li>
					<a href="#">Contact Us</a>
				</li>
				<li>
					<a href="#">Trending</a>
				</li>
				<li>
					<a href="#">New Releases</a>
				</li>
			</ul>
			<ul class="footer-nav-links">
				<li>
					<a href="#">My Cart</a>
				</li>
				<li>
					<a href="./pages/signup/signup.html">Sign up</a>
				</li>
				<li>
					<a href="./pages/login/login.html">Login</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
