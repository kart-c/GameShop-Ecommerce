import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ searchValue, setSearchValue }) => {
	const { authState } = useAuth();

	const location = useLocation();

	return (
		<header className={`header ${styles.header}`}>
			<h2>
				<Link to="/">
					Game<span>Shop</span>
				</Link>
			</h2>
			{location.pathname === '/products' ? (
				<input
					type="search"
					name="search"
					className="header-search"
					placeholder="Search..."
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			) : null}
			<i className="fas fa-bars hamburger-menu"></i>
			<nav className="nav">
				<ul className="nav-list">
					<li>
						<Link to={authState.token && authState.user ? '/user' : '/login'}>
							<i className="fas fa-user"></i>
							{authState.user ? ` ${authState.user.firstName}` : ' Login'}
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
