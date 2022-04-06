import React, { useState, useEffect } from 'react';
import { Card, Header, Loaders } from '../../Components';
import styles from './Wishlist.module.css';
import { useAuth, useWishlist } from '../../Context';
import { Link } from 'react-router-dom';
import { fetchWishlist } from '../../Utils';

const Wishlist = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { authState } = useAuth();

	const {
		wishlistState: { wishlist },
		wishlistDispatch,
	} = useWishlist();

	useEffect(() => fetchWishlist(authState.token, wishlistDispatch, setIsLoading), []);

	return (
		<>
			<Header />
			{isLoading && <Loaders />}
			<main className={styles.wlPg}>
				{wishlist.length > 0 && !isLoading ? (
					<>
						<h3 className={styles.wlHeading}>My Wishlist</h3>
						<small>3 Items</small>
						<section className={styles.productList}>
							{wishlist.map((wishlistItem) => (
								<Card key={wishlistItem._id} {...wishlistItem} products={wishlist} />
							))}
						</section>
					</>
				) : (
					<h1>
						Your Wishlist is empty. <Link to="/products">Browse Products</Link>
					</h1>
				)}
			</main>
		</>
	);
};

export default Wishlist;
