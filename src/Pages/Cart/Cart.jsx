import { useEffect } from 'react';
import { Header } from '../../Components';
import { HorizontalCard } from '../../Components/Horizontal_Card/HorizontalCard';
import { useAuth, useCart } from '../../Context';
import styles from './Cart.module.css';
import PriceContainer from './Components/Price Container/PriceContainer';
import { Link } from 'react-router-dom';
import { fetchCartProducts } from '../../Utils';

const Cart = () => {
	const { authState } = useAuth();

	const { cartState, cartDispatch } = useCart();

	useEffect(() => {
		fetchCartProducts(authState.token, cartDispatch);
	}, []);

	return (
		<>
			<Header />
			<main className={styles.cartMain}>
				{cartState.cart.length > 0 ? (
					<>
						<div>
							<h3 className={styles.cartHeading}>My Cart</h3>
							<small>2 Items</small>
						</div>
						<section className={styles.cartContainer}>
							<div>
								{cartState.cart.map((card) => (
									<HorizontalCard {...card} key={card._id} />
								))}
							</div>

							<PriceContainer />
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
