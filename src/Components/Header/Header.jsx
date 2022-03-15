import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={`header ${styles.header}`}>
			<h2>
				<Link to="/">
					Game<span>Shop</span>
				</Link>
			</h2>
			<input type="search" name="search" className="header-search" placeholder="Search..." />
			<i className="fas fa-bars hamburger-menu"></i>
			<nav className="nav">
				<ul className="nav-list">
					<li>
						<Link to="/login">
							<i className="fas fa-user"></i> Profile
						</Link>
					</li>
					<li>
						<Link to="/wishlist">
							<i className="fas fa-heart"></i> Wishlist
						</Link>
					</li>
					<li>
						<Link to="/cart">
							<i className="fa-solid fa-bag-shopping"></i> Bag
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
