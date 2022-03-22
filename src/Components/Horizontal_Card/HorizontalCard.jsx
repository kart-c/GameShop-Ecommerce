import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useCart } from '../../Context';
import styles from './HorizontalCard.module.css';
import axios from 'axios';

const HorizontalCard = ({ _id, title, image, price, qty }) => {
	const [qtyChangeLoader, setQtyChangeLoader] = useState(false);

	const { cartState, cartDispatch } = useCart();
	const { authState } = useAuth();

	useEffect(() => {
		return () => {};
	}, []);

	const deleteHandler = async (_id) => {
		try {
			const response = await axios.delete(`/api/user/cart/${_id}`, {
				headers: {
					authorization: authState.token,
				},
			});
			if (response.status === 200) {
				cartDispatch({ type: 'REMOVE_FROM_CART', payload: response.data.cart });
				setQtyChangeLoader(false);
			} else {
				console.error('ERROR: ', response);
			}
		} catch (error) {
			console.error('ERROR: ', error);
		}
	};

	const updateHandler = async (_id, type) => {
		setQtyChangeLoader(true);
		const product = cartState.cart.find((product) => product._id === _id);
		try {
			const response = await axios.post(
				`/api/user/cart/${_id}`,
				{
					action: {
						type,
					},
					data: {
						cart: product,
					},
				},
				{
					headers: {
						authorization: authState.token,
					},
				}
			);
			if (response.status === 200) {
				cartDispatch({ type: type.toUpperCase(), payload: response.data.cart });
				setQtyChangeLoader(false);
			} else {
				console.error('ERROR: ', response);
			}
		} catch (error) {
			console.error('ERROR: ', error);
		}
	};

	return (
		<article className={`card horizontal-card card-shadow ${styles.card}`}>
			<img src={image} alt={image} className={`card-img ${styles.cardImg}`} />
			<div className={`content ${styles.content}`}>
				<h3>{title}</h3>
				<div className="buy-info">
					<p>
						<strong>Rs. {price}</strong>
					</p>
					<p>
						<small>
							<s>Rs. 2999</s>
						</small>
						<small className="card-discount"> (60% OFF)</small>
					</p>
					<div className="product-count">
						<button
							onClick={() => (qty === 1 ? deleteHandler(_id) : updateHandler(_id, 'decrement'))}
							disabled={qtyChangeLoader}
						>
							<i className={`fa-solid fa-minus ${qty === 1 && 'fa-trash'}`}></i>
						</button>
						<span>{qty}</span>
						<button
							onClick={() => updateHandler(_id, 'increment')}
							disabled={qty >= 5 || qtyChangeLoader}
						>
							<i className="fa-solid fa-plus"></i>
						</button>
					</div>
				</div>
				<div>
					<Link to="/wishlist" className={`action-link ${styles.actionLink}`}>
						Move to wishlist
					</Link>
				</div>
			</div>
		</article>
	);
};

export { HorizontalCard };
