import React from 'react';
import styles from './PriceContainer.module.css';

const PriceContainer = () => {
	return (
		<div className={styles.cartPriceContainer}>
			<h3>Price Total</h3>
			<div className={styles.priceDetails}>
				<div>
					<span>Price (2 Items)</span>
					<span>Discount</span>
					<span>Delivery Charges</span>
					<span className={styles.amountSpan}>Total Amount</span>
				</div>
				<div>
					<span>5988 /-</span>
					<span>- 2390 /-</span>
					<span>40 /-</span>
					<span className={styles.amountSpan}>3588 /-</span>
				</div>
			</div>
			<button className="btn btn-primary">Place Order</button>
		</div>
	);
};

export default PriceContainer;
