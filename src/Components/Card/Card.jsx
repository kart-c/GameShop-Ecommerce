import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../../Context';
import { addToCartHandler } from '../../Utils';
import styles from './Card.module.css';

const Card = ({ discount, badge, categoryName, image, price, rating, title, _id, products }) => {
	const [cartBtnLoader, setCartBtnLoader] = useState(false);

	const navigate = useNavigate();

	const { authState } = useAuth();

	const { cartState, cartDispatch } = useCart();

	const checkCartStatus = (_id) => {
		const itemInCart = cartState.cart.find((item) => item._id === _id);
		return itemInCart ? 'Go to Cart' : 'Add to Cart';
	};

	const cartBtnHandler = async (_id) => {
		setCartBtnLoader(true);
		const product = products.find((product) => product._id === _id);
		if (authState.token) {
			const response = await addToCartHandler(product, authState.token);

			if (response.status === 201) {
				cartDispatch({ type: 'ADD_TO_CART', payload: response.data.cart });
				setCartBtnLoader(false);
			}
		} else {
			alert('You are not logged in');
			navigate('/login');
		}
	};

	return (
		<article className={`card product-card card-shadow ${styles.card}`}>
			<img src={image} alt="card image 1" className={`card-img ${styles.cardImg}`} />
			<div className={`content ${styles.content}`}>
				<h4>{title}</h4>
				<span>{categoryName} - PC game</span>
				<div className="overlay-icon">
					<i className="far fa-heart"></i>
				</div>
				{badge && (
					<span className={`product-card-badge ${styles.productCardBadge}`}>
						<strong>{badge}</strong>
					</span>
				)}
				<div className={styles.rating}>Ratings: {rating}/5</div>
				<p>
					{discount ? (
						<strong>Rs. {(price - (discount / 100) * price).toFixed(0)} </strong>
					) : (
						<strong>Rs. {price} </strong>
					)}

					<small>{discount ? <s>Rs. {price}</s> : ''}</small>
					{discount ? <small className={styles.cardDiscount}> ({discount}% OFF)</small> : null}
				</p>
				{checkCartStatus(_id) === 'Add to Cart' ? (
					<button
						disabled={badge === 'Out of Stock' || cartBtnLoader}
						className={`action-link ${styles.actionBtn}`}
						title={badge === 'Out of Stock' ? 'Item is out of stock' : null}
						onClick={() => cartBtnHandler(_id)}
					>
						Add to Cart
					</button>
				) : (
					<button
						onClick={() => navigate('/cart')}
						className={`action-link ${styles.actionBtn} ${styles.navigate}`}
						disabled={cartBtnLoader}
					>
						Go to Cart
					</button>
				)}
			</div>
		</article>
	);
};

export { Card };
