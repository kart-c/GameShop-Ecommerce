import React from 'react';
import { Card, Header } from '../../Components';
import './Wishlist.css';

const Wishlist = () => {
	return (
		<>
			<Header />
			<main class="wl-pg">
				<h3 class="wl-heading">My Wishlist</h3>
				<small>3 Items</small>
				<section class="product-list">
					<Card />
					<Card />
					<Card />
				</section>
			</main>
		</>
	);
};

export default Wishlist;
