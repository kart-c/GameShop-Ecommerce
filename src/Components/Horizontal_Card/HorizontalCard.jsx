import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalCard.css';

const HorizontalCard = () => {
	return (
		<article className="card horizontal-card card-shadow">
			<picture>
				<source srcSet="../../Assets/category-img-1__1.webp" />
				<img
					src="../../Assets/category-img-1__2.jpg"
					alt="horizontal card image"
					className="card-img"
				/>
			</picture>
			<div className="content">
				<h3>Read Dead Redemption 2</h3>
				<div className="buy-info">
					<p>
						<strong>Rs. 1799</strong>
					</p>
					<p>
						<small>
							<s>Rs. 2999</s>
						</small>
						<small className="card-discount">(60% OFF)</small>
					</p>
					<div className="product-count">
						<button>
							<i className="fa-solid fa-trash"></i>
						</button>
						<span>1</span>
						<button>
							<i className="fa-solid fa-plus"></i>
						</button>
					</div>
				</div>
				<div>
					<Link to="/wishlist" className="action-link">
						Move to wishlist
					</Link>
				</div>
			</div>
		</article>
	);
};

export { HorizontalCard };