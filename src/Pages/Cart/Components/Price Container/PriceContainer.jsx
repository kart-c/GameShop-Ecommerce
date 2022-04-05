import { useState } from 'react';
import { useCart } from '../../../../Context';
import styles from './PriceContainer.module.css';

const PriceContainer = () => {
	const [applyCoupon, setApplyCoupon] = useState(false);

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

	const totalAmount = 11000;
	// (totalPrice - discount + 40).toFixed(2);

	return (
		<>
			<div className={`modal-backdrop ${styles.backdrop} ${applyCoupon ? 'modal-hide' : ''}`}></div>
			<div className={`modal ${applyCoupon ? 'modal-hide' : ''}`}>
				<div className={`modal-container ${styles.modalContainer}`}>
					<div className={`modal-header ${styles.modalHeader}`}>
						<span>Select Coupon</span>
						<button>
							<i className="fa-solid fa-circle-xmark"></i>
						</button>
					</div>
					<div className={`checkbox-container ${styles.coupon}`}>
						<input type="checkbox" name="coupon 10%" id="coupon-1" disabled={totalAmount < 10000} />
						<label htmlFor="coupon-1" className={totalAmount < 10000 ? styles.couponLabel : ''}>
							<strong>10% off</strong> on purchases above 10,000
						</label>
					</div>
					<div className={`checkbox-container ${styles.coupon}`}>
						<input type="checkbox" name="coupon 15%" id="coupon-2" disabled={totalAmount < 12000} />
						<label htmlFor="coupon-2" className={totalAmount < 12000 ? styles.couponLabel : ''}>
							<strong>12% off</strong> on purchases above 12,000
						</label>
					</div>
				</div>
			</div>
			<div className={styles.cartPriceContainer}>
				<h3>Total Price ({cart.length} Items)</h3>
				<button className={`btn btn-info ${styles.couponBtn}`}>Apply Coupons</button>
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
						<span>40.00 /-</span>
						<span className={styles.amountSpan}>{totalAmount} /-</span>
					</div>
				</div>
				<button className="btn btn-primary">Place Order</button>
			</div>
		</>
	);
};

export default PriceContainer;
