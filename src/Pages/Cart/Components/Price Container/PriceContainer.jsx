import React from 'react';
import { useCart } from '../../../../Context';
import styles from './PriceContainer.module.css';

const PriceContainer = () => {
	const {
		cartState: { cart },
	} = useCart();

	const curr = cart.reduce(
		(acc, curr) => ({
			...acc,
			price: acc.price + curr.price * curr.qty,
		}),
		{ price: 0, qty: 0 }
	);

	const totalPrice = curr.price;

	const discountCalc = (price, discount, qty) => price * qty * (1 - discount / 100);

	const discountedPrice = cart.reduce(
		(acc, curr) => acc + discountCalc(curr.price, curr.discount, curr.qty),
		0,
		{ price: 0, discount: 0, qty: 0 }
	);

	const discount = totalPrice - discountedPrice;

	return (
		<div className={styles.cartPriceContainer}>
			<h3>Total Price ({cart.length} Items)</h3>
			<div className={styles.priceDetails}>
				<div>
					<span>Price</span>
					<span>Discount</span>
					<span>Delivery Charges</span>
					<span className={styles.amountSpan}>Total Amount</span>
				</div>
				<div>
					<span>{totalPrice.toFixed(2)} /-</span>
					<span>- {discount.toFixed(2)} /-</span>
					<span>{(40).toFixed(2)} /-</span>
					<span className={styles.amountSpan}>{(totalPrice - discount + 40).toFixed(2)} /-</span>
				</div>
			</div>
			<button className="btn btn-primary">Place Order</button>
		</div>
	);
};

export default PriceContainer;
