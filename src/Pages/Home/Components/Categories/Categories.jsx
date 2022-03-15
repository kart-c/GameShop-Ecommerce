import React from 'react';
import './Categories.css';

const Categories = () => {
	return (
		<div className="category-list">
			<a href="#" className="category-item">
				<picture>
					<source srcSet="../Assets/category-img-1__1.webp" />
					<source srcSet="./Assets/category-img-1__2.jpg" />
					<img src="./Assets/category-img-1__3.jpg" alt="Hero Image" />
				</picture>
				<span>Action Games</span>
			</a>
			<a href="#" className="category-item">
				<picture>
					<source srcSet="../Assets/category-img-2__1.webp" />
					<source srcSet="./Assets/category-img-2__2.jpg" />
					<img src="./Assets/category-img-2__3.jpg" alt="Hero Image" />
				</picture>
				<span>Sports Games</span>
			</a>
			<a href="#" className="category-item">
				<picture>
					<source srcSet="../Assets/hero-image.webp" />
					<source srcSet="./Assets/hero-image-2.jpg" />
					<img src="./Assets/hero.jpg" alt="Hero Image" />
				</picture>
				<span>RPG Games</span>
			</a>
			<a href="#" className="category-item">
				<picture>
					<source srcSet="../Assets/category-img-3__1.webp" />
					<source srcSet="./Assets/category-img-3__2.jpg" />
					<img src="./Assets/category-img-3__3.jpg" alt="Hero Image" />
				</picture>
				<span>Strategy Games</span>
			</a>
		</div>
	);
};

export default Categories;
