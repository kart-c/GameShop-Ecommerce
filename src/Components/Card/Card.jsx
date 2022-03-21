import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context';
import styles from './Card.module.css';

const Card = ({
	badge,
	categoryName,
	image,
	price,
	rating,
	title,
	wishlist,
	cartBtnHandler,
	_id,
	checkCartStatus,
}) => {
	const navigate = useNavigate();
	return (
		<article className={`card product-card card-shadow ${styles.card}`}>
			<img src={image} alt="card image 1" className={`card-img ${styles.cardImg}`} />
			<div className={`content ${styles.content}`}>
				<h4>{title}</h4>
				<span>{categoryName} - PC game</span>
				<div className="overlay-icon">
					<i className={`far fa-heart ${wishlist && 'fas'}`}></i>
				</div>
				{badge && (
					<span className={`product-card-badge ${styles.productCardBadge}`}>
						<strong>{badge}</strong>
					</span>
				)}
				<div className={styles.rating}>Ratings: {rating}/5</div>
				<p>
					<strong>Rs. {price}</strong>{' '}
					<small>
						<s>Rs. 2999</s>
					</small>
					<small className={styles.cardDiscount}> (60% OFF)</small>
				</p>
				{checkCartStatus(_id) === 'Add to Cart' ? (
					<button
						disabled={badge === 'Out of Stock'}
						className={`action-link ${styles.actionBtn}`}
						title={badge === 'Out of Stock' ? 'Item is out of stock' : ''}
						onClick={() => cartBtnHandler(_id)}
					>
						Add to Cart
					</button>
				) : (
					<button
						onClick={() => navigate('/cart')}
						className={`action-link ${styles.actionBtn} ${styles.navigate}`}
					>
						Go to Cart
					</button>
				)}
			</div>
		</article>
	);
};

export { Card };
