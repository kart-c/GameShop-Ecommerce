import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<h2>
				<a href="#">
					Game<span>Shop</span>
				</a>
			</h2>
			<input type="search" name="search" className="header-search" placeholder="Search..." />
			<i className="fas fa-bars hamburger-menu"></i>
			<nav className="nav">
				<ul className="nav-list">
					<li>
						<a href="./pages/login/login.html">
							<i className="fas fa-user"></i> Profile
						</a>
					</li>
					<li>
						<a href="./pages/wishlist/wishlist.html">
							<i className="fas fa-heart"></i> Wishlist
						</a>
					</li>
					<li>
						<a href="./pages/cart/cart.html">
							<i className="fas fa-shopping-bag"></i> Bag
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
