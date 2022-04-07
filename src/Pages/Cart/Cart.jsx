import { useState, useEffect } from 'react';
import { Header, Loaders } from '../../Components';
import { HorizontalCard } from '../../Components/Horizontal_Card/HorizontalCard';
import { useAuth, useCart } from '../../Context';
import PriceContainer from './Components/Price Container/PriceContainer';
import { Link } from 'react-router-dom';
import { fetchCartProducts } from '../../Utils';
import styles from './Cart.module.css';

const Cart = () => {
	const { authState } = useAuth();
	const [couponType, setCouponType] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const { cartState, cartDispatch } = useCart();

	useEffect(() => {
		fetchCartProducts(authState.token, cartDispatch, setIsLoading);
	}, []);

	return (
		<>
			<Header />
			{isLoading && <Loaders />}
			<main className={styles.cartMain}>
				{cartState.cart.length > 0 && !isLoading ? (
					<>
						<div>
							<h3 className={styles.cartHeading}>My Cart</h3>
							<small>2 Items</small>
						</div>
						<section className={styles.cartContainer}>
							<div>
								{cartState.cart.map((card) => (
									<HorizontalCard {...card} key={card._id} setCouponType={setCouponType} />
								))}
							</div>

							<PriceContainer couponType={couponType} setCouponType={setCouponType} />
						</section>
					</>
				) : (
					<>
						<h2>
							Cart is empty
							<Link to="/products"> Browse Products</Link>
						</h2>
					</>
				)}
			</main>
		</>
	);
};

export default Cart;
