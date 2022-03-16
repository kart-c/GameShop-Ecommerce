import React from 'react';
import { Card, Header } from '../../Components';
import styles from './Wishlist.module.css';

const Wishlist = () => {
	return (
		<>
			<Header />
			<main className={styles.wlPg}>
				<h3 className={styles.wlHeading}>My Wishlist</h3>
				<small>3 Items</small>
				<section className={styles.productList}>
					<Card />
					<Card />
					<Card />
				</section>
			</main>
		</>
	);
};

export default Wishlist;
