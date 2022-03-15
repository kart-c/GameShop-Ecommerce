import React from 'react';
import { Link } from 'react-router-dom';
import { Category1, Category2, Category3, Carousel1 } from '../../../../Assets/images';
import styles from './Categories.module.css';

const Categories = () => {
	return (
		<div className={styles.categoryList}>
			<Link to="/products" className={styles.categoryItem}>
				<img src={Category1} alt="Hero Image" />
				<span>Action Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem}>
				<img src={Category2} alt="Hero Image" />
				<span>Sports Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem}>
				<img src={Carousel1} alt="Hero Image" />
				<span>RPG Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem}>
				<img src={Category3} alt="Hero Image" />
				<span>Strategy Games</span>
			</Link>
		</div>
	);
};

export default Categories;
