import React, { useEffect } from 'react';
import { Card, Header } from '../../Components';
import styles from './Wishlist.module.css';
import axios from 'axios';
import { useAuth, useWishlist } from '../../Context';

const Wishlist = () => {
	const { authState } = useAuth();

	const {
		wishlistState: { wishlist },
		wishlistDispatch,
	} = useWishlist();

	const fetchWishlist = async () => {
		try {
			const response = await axios.get('/api/user/wishlist', {
				headers: { authorization: authState.token },
			});
			if (response.status === 200) {
				wishlistDispatch({ type: 'INITIAL', payload: response.data.wishlist });
			} else {
				console.error('ERROR: ', response);
			}
		} catch (error) {
			console.log('ERROR: ', error);
		}
	};

	useEffect(() => fetchWishlist(), []);

	return (
		<>
			<Header />
			<main className={styles.wlPg}>
				<h3 className={styles.wlHeading}>My Wishlist</h3>
				<small>3 Items</small>
				<section className={styles.productList}>
					{wishlist.map((wishlistItem) => (
						<Card key={wishlistItem._id} {...wishlistItem} products={wishlist} />
					))}
				</section>
			</main>
		</>
	);
};

export default Wishlist;
