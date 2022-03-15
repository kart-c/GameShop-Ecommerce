import React from 'react';
import './PriceContainer.css';

const PriceContainer = () => {
	return (
		<div className="cart-price-container">
			<h3>Price Total</h3>
			<div className="price-details">
				<div>
					<span>Price (2 Items)</span>
					<span>Discount</span>
					<span>Delivery Charges</span>
					<span className="amount-span">Total Amount</span>
				</div>
				<div>
					<span>5988 /-</span>
					<span>- 2390 /-</span>
					<span>40 /-</span>
					<span className="amount-span">3588 /-</span>
				</div>
			</div>
			<button className="btn btn-primary">Place Order</button>
		</div>
	);
};

export default PriceContainer;
