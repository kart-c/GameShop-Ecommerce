import React from 'react';
import { Header } from '../../Components';
import { HorizontalCard } from '../../Components/Horizontal_Card/HorizontalCard';
import styles from './Cart.module.css';
import PriceContainer from './Components/Price Container/PriceContainer';

const Cart = () => {
	return (
		<>
			<Header />
			<main className={styles.cartMain}>
				<div>
					<h3 className={styles.cartHeading}>My Cart</h3>
					<small>2 Items</small>
				</div>
				<section className={styles.cartContainer}>
					<div>
						<HorizontalCard />
						<HorizontalCard />
					</div>
					<PriceContainer />
				</section>
			</main>
		</>
	);
};

export default Cart;
