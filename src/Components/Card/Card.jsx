import React from 'react';
import './Card.css';

const Card = () => {
	return (
		<article class="card product-card card-shadow">
			<a href="#">
				<picture>
					<source srcset="../../Assets/wallpaperflare.com_wallpaper.jpg" />
					<source srcset="../../Assets/wallpaperflare.com_wallpaper.jpg" />
					<img
						src="../../Assets/wallpaperflare.com_wallpaper.jpg"
						alt="card image 1"
						class="card-img"
					/>
				</picture>
			</a>
			<div class="content">
				<h4>God of War</h4>
				<span>RPG - PC game</span>
				<div class="overlay-icon">
					<i class="far fa-heart"></i>
				</div>
				<span class="product-card-badge">
					<strong>New</strong>
				</span>
				<p>
					<strong>Rs. 1799</strong>{' '}
					<small>
						<s>Rs. 2999</s>
					</small>
					<small class="card-discount">(60% OFF)</small>
				</p>
				<a href="#" class="action-link">
					Add to Cart
				</a>
			</div>
		</article>
	);
};

export { Card };
