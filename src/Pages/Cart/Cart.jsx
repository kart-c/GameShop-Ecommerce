import React from 'react';
import { Header } from '../../Components';
import { HorizontalCard } from '../../Components/Horizontal_Card/HorizontalCard';
import './Cart.css';
import PriceContainer from './Components/Price Container/PriceContainer';

const Cart = () => {
	return (
		<>
			<Header />
			<main className="cart-main">
				<div>
					<h3 class="cart-heading">My Cart</h3>
					<small>2 Items</small>
				</div>
				<section class="cart-container">
					<div class="cart-items">
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
