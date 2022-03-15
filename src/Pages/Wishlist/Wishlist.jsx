import React from 'react';
import { Card, Header } from '../../Components';
import './Wishlist.css';

const Wishlist = () => {
	return (
		<>
			<Header />
			<main className="wl-pg">
				<h3 className="wl-heading">My Wishlist</h3>
				<small>3 Items</small>
				<section className="product-list">
					<Card />
					<Card />
					<Card />
				</section>
			</main>
		</>
	);
};

export default Wishlist;
