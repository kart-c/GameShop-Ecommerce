import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import {
	Category1_1,
	Category1_2,
	Category2_1,
	Category2_2,
	Category3_1,
	Category3_2,
	Carousel1_1,
	Carousel1_2,
} from '../../../../Assets/images';

const Categories = () => {
	return (
		<div className="category-list">
			<Link to="/products" className="category-item">
				<picture>
					<source srcSet={Category1_1} />
					<img src={Category1_2} alt="Hero Image" />
				</picture>
				<span>Action Games</span>
			</Link>
			<Link to="/products" className="category-item">
				<picture>
					<source srcSet={Category2_1} />
					<img src={Category2_2} alt="Hero Image" />
				</picture>
				<span>Sports Games</span>
			</Link>
			<Link to="/products" className="category-item">
				<picture>
					<source srcSet={Carousel1_1} />
					<img src={Carousel1_2} alt="Hero Image" />
				</picture>
				<span>RPG Games</span>
			</Link>
			<Link to="/products" className="category-item">
				<picture>
					<source srcSet={Category3_1} />
					<img src={Category3_2} alt="Hero Image" />
				</picture>
				<span>Strategy Games</span>
			</Link>
		</div>
	);
};

export default Categories;
