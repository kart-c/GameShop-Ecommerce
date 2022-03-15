import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { Category1 } from '../../Assets/images';

const Card = () => {
	return (
		<article className="card product-card card-shadow">
			<Link to="/products">
				<img src={Category1} alt="card image 1" className="card-img" />
			</Link>
			<div className="content">
				<h4>God of War</h4>
				<span>RPG - PC game</span>
				<div className="overlay-icon">
					<i className="far fa-heart"></i>
				</div>
				<span className="product-card-badge">
					<strong>New</strong>
				</span>
				<p>
					<strong>Rs. 1799</strong>{' '}
					<small>
						<s>Rs. 2999</s>
					</small>
					<small className="card-discount">(60% OFF)</small>
				</p>
				<Link to="/cart" className="action-link">
					Add to Cart
				</Link>
			</div>
		</article>
	);
};

export { Card };
