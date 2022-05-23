import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useCart } from '../../../../Context';
import { discount, discountedPrice, finalValue, totalPrice } from '../../../../Utils';
import styles from './PriceContainer.module.css';

const PriceContainer = ({ couponType, setCouponType, deleteHandler }) => {
	const [applyCoupon, setApplyCoupon] = useState(false);

	const {
		cartState: { cart },
	} = useCart();

	const {
		authState: { user },
	} = useAuth();

	const navigate = useNavigate();

	const totalPayable = totalPrice(cart);

	const priceAfterDiscount = discountedPrice(cart);

	const totalDiscount = discount(totalPayable.price, priceAfterDiscount);

	const totalAmount = (totalPayable.price - totalDiscount + 40).toFixed(2);

	const finalPayable = finalValue(couponType, totalAmount);

	const placeOrder = async () => {
		const response = await loadSdk();
		if (response) {
			const options = {
				key: 'rzp_test_WYsT96c0wBHKtE',
				key_id: 'rzp_test_WYsT96c0wBHKtE',
				key_secret: 'aveN5IQwnEMFnITnCwBadifG',
				amount: finalValue() * 100,
				currency: 'INR',
				name: 'GameShop',
				description: 'Thank you for shopping with us',
				callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
				prefill: {
					name: user.firstName,
					email: user.email,
					contact: '9999999999',
				},
				notes: { address: 'Razorpay Corporate Office' },
				theme: { color: '#202528' },
				handler: function (response) {
					cart.map((item) => deleteHandler(item._id));
					navigate('/products');
					toast.success('Order Placed Successfully');
				},
			};
			const rzp1 = new window.Razorpay(options);
			rzp1.open();
			rzp1.on('payment.failed', function (response) {
				toast.error('Something went wrong', response.error.code);
			});
		} else {
			toast.error('Something went wrong');
		}
	};

	const loadSdk = async () => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/checkout.js';
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
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
						{totalAmount !== finalPayable ? <span>Coupon discount</span> : null}
						<span className={styles.amountSpan}>Total Amount</span>
					</div>
					<div>
						<span>{totalPayable.price.toFixed(2)} /-</span>
						<span>- {totalDiscount.toFixed(2)} /-</span>
						<span>40.00 /-</span>
						{totalAmount !== finalPayable ? (
							<span>- {(totalAmount - finalPayable).toFixed(2)} /-</span>
						) : null}
						<span className={styles.amountSpan}>{finalPayable} /-</span>
					</div>
				</div>
				<button className="btn btn-primary" onClick={placeOrder}>
					Place Order
				</button>
			</div>
		</>
	);
};

export default PriceContainer;
