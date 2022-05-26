import { useState, useEffect } from 'react';
import { Checkout, Header, Loaders } from '../../Components';
import { HorizontalCard } from '../../Components/Horizontal_Card/HorizontalCard';
import { useAuth, useCart } from '../../Context';
import PriceContainer from './Components/Price Container/PriceContainer';
import { Link } from 'react-router-dom';
import { fetchCartProducts } from '../../Utils';
import { emptyCart } from '../../Assets/images';
import styles from './Cart.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Cart = () => {
	const { authState } = useAuth();
	const [couponType, setCouponType] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [checkout, setCheckout] = useState(false);

	const { cartState, cartDispatch } = useCart();

	useEffect(() => {
		fetchCartProducts(authState.token, cartDispatch, setIsLoading);
	}, []);

	const deleteHandler = async (_id, setQtyChangeLoader, title) => {
		try {
			const response = await axios.delete(`/api/user/cart/${_id}`, {
				headers: {
					authorization: authState.token,
				},
			});
			if (response.status === 200) {
				setCouponType('');
				title && toast.info(`Removed ${title} from cart`);
				cartDispatch({ type: 'REMOVE_FROM_CART', payload: response.data.cart });
				setQtyChangeLoader && setQtyChangeLoader(false);
			} else {
				console.error('ERROR: ', response);
			}
		} catch (error) {
			console.error('ERROR: ', error);
		}
	};

	return (
		<>
			{/* <Header /> */}
			{isLoading && <Loaders />}
			{checkout ? (
				<Checkout couponType={couponType} setCheckout={setCheckout} deleteHandler={deleteHandler} />
			) : (
				<main className={styles.cartMain}>
					{cartState.cart.length > 0 && !isLoading ? (
						<>
							<div>
								<h3 className={styles.cartHeading}>My Cart</h3>
								<small>
									{cartState.cart.length} {cartState.cart.length > 1 ? 'items' : 'item'}
								</small>
							</div>
							<section className={styles.cartContainer}>
								<div>
									{cartState.cart.map((card) => (
										<HorizontalCard
											{...card}
											key={card._id}
											setCouponType={setCouponType}
											deleteHandler={deleteHandler}
										/>
									))}
								</div>

								<PriceContainer
									couponType={couponType}
									setCouponType={setCouponType}
									setCheckout={setCheckout}
								/>
							</section>
						</>
					) : (
						<>
							{!isLoading && (
								<div className={styles.emptyCartContainer}>
									<span className={styles.emptyMsgTitle}>Looks like your cart is empty</span>
									<img src={emptyCart} alt="responsive image" className="resp-img" />
									<Link to="/products"> Browse Products</Link>
								</div>
							)}
						</>
					)}
				</main>
			)}
		</>
	);
};

export { Cart };
