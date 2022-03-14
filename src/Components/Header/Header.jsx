import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header class="header">
			<h2>
				<a href="#">
					Game<span>Shop</span>
				</a>
			</h2>
			<input type="search" name="search" class="header-search" placeholder="Search..." />
			<i class="fas fa-bars hamburger-menu"></i>
			<nav class="nav">
				<ul class="nav-list">
					<li>
						<a href="./pages/login/login.html">
							<i class="fas fa-user"></i> Profile
						</a>
					</li>
					<li>
						<a href="./pages/wishlist/wishlist.html">
							<i class="fas fa-heart"></i> Wishlist
						</a>
					</li>
					<li>
						<a href="./pages/cart/cart.html">
							<i class="fas fa-shopping-bag"></i> Bag
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
