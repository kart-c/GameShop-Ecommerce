import React, { useState, useEffect } from 'react';
import { Card, Header, Loaders } from '../../Components';
import { useAuth, useWishlist } from '../../Context';
import { Link } from 'react-router-dom';
import { fetchWishlist } from '../../Utils';
import { emptyWishlist } from '../../Assets/images';
import styles from './Wishlist.module.css';

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
					<>
						{!isLoading && (
							<div className={styles.emptyCartContainer}>
								<span className={styles.emptyMsgTitle}>Hmm... So empty</span>
								<img src={emptyWishlist} alt="responsive image" className="resp-img" />
								<Link to="/products"> Browse Products</Link>
							</div>
						)}
					</>
				)}
			</main>
		</>
	);
};

export default Wishlist;
