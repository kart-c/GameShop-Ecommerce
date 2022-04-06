import { useState } from 'react';
import { useAuth } from '../../Context';
import { useFilter } from '../../Context';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ searchValue, setSearchValue }) => {
	const [showMenu, setShowMenu] = useState(false);
	const { authState } = useAuth();

	const location = useLocation();

	const { filterDispatch } = useFilter();

	const searchHandler = (e) => {
		filterDispatch({ type: 'CLEAR' });
		setSearchValue(e.target.value);
	};

	return (
		<header className={`header ${styles.header}`}>
			<div
				className={`${showMenu ? styles.backdrop : ''} ${
					location.pathname === '/products' ? styles.searchActive : ''
				}`}
				onClick={() => setShowMenu(false)}
			></div>
			<h2>
				<Link to="/">
					Game<span>Shop</span>
				</Link>
			</h2>
			{location.pathname === '/products' ? (
				<input
					type="search"
					name="search"
					className={`header-search ${styles.search}`}
					placeholder="Search..."
					value={searchValue}
					onChange={searchHandler}
				/>
			) : null}
			<button className={`${styles.menuBtn}`} onClick={() => setShowMenu(!showMenu)}>
				<i className="fas fa-bars hamburger-menu"></i>
			</button>
			<nav
				className={`nav ${styles.nav} ${showMenu ? styles.active : ''} ${
					location.pathname === '/products' ? styles.searchActive : ''
				}`}
			>
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
