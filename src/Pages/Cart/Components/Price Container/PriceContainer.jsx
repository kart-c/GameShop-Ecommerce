import { useState } from 'react';
import { useCart } from '../../../../Context';
import styles from './PriceContainer.module.css';

const PriceContainer = ({ couponType, setCouponType }) => {
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

	const totalAmount = (totalPrice - discount + 40).toFixed(2);

	const finalValue = () => {
		if (couponType === '10') {
			return (totalAmount - (totalAmount * Number(couponType)) / 100).toFixed(2);
		} else if (couponType === '15') {
			return (totalAmount - (totalAmount * Number(couponType)) / 100).toFixed(2);
		}
		return totalAmount;
	};

	return (
		<>
			<div className={`modal-backdrop ${styles.backdrop} ${applyCoupon ? '' : 'modal-hide'}`}></div>
			<div className={`modal ${applyCoupon ? '' : 'modal-hide'}`}>
				<div className={`modal-container ${styles.modalContainer}`}>
					<div className={`modal-header ${styles.modalHeader}`}>
						<span>Select Coupon</span>
						<button onClick={() => setApplyCoupon(false)}>
							<i className="fa-solid fa-circle-xmark"></i>
						</button>
					</div>
					<div className={`checkbox-container ${styles.coupon}`}>
						<input
							type="checkbox"
							name="coupon 10%"
							id="coupon10"
							disabled={totalAmount < 10000}
							value="10"
							checked={couponType === '10'}
							onChange={(e) =>
								e.target.checked ? setCouponType(e.target.value) : setCouponType('')
							}
						/>
						<label htmlFor="coupon10" className={totalAmount < 10000 ? styles.couponLabel : ''}>
							<strong>10% off</strong> on purchases above 10,000
						</label>
					</div>
					<div className={`checkbox-container ${styles.coupon}`}>
						<input
							type="checkbox"
							name="coupon 15%"
							id="coupon15"
							disabled={totalAmount < 12000}
							value="15"
							checked={couponType === '15'}
							onChange={(e) =>
								e.target.checked ? setCouponType(e.target.value) : setCouponType('')
							}
						/>
						<label htmlFor="coupon15" className={totalAmount < 12000 ? styles.couponLabel : ''}>
							<strong>15% off</strong> on purchases above 12,000
						</label>
					</div>
				</div>
			</div>
			<div className={styles.cartPriceContainer}>
				<h3>
					Total Price ({cart.length} {cart.length > 1 ? 'Items' : 'Item'})
				</h3>
				<button className={`btn btn-info ${styles.couponBtn}`} onClick={() => setApplyCoupon(true)}>
					{couponType ? 'Coupon Applied' : 'Apply Coupon'}
				</button>
				{couponType ? <span className={styles.couponType}>{couponType}%</span> : ''}
				<div className={styles.priceDetails}>
					<div>
						<span>Price</span>
						<span>Discount</span>
						<span>Delivery Charges</span>
						{totalAmount !== finalValue() ? <span>Coupon discount</span> : null}
						<span className={styles.amountSpan}>Total Amount</span>
					</div>
					<div>
						<span>{totalPrice.toFixed(2)} /-</span>
						<span>- {discount.toFixed(2)} /-</span>
						<span>40.00 /-</span>
						{totalAmount !== finalValue() ? (
							<span>- {(totalAmount - finalValue()).toFixed(2)} /-</span>
						) : null}
						<span className={styles.amountSpan}>{finalValue()} /-</span>
					</div>
				</div>
				<button className="btn btn-primary">Place Order</button>
			</div>
		</>
	);
};

export default PriceContainer;
