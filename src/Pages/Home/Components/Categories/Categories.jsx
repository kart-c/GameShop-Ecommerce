import React from 'react';
import { Link } from 'react-router-dom';
import { RDR2, Fifa, AOE4, GOW } from '../../../../Assets/images';
import styles from './Categories.module.css';

const Categories = () => {
	return (
		<div className={styles.categoryList}>
			<Link to="/products" className={styles.categoryItem}>
				<img src={RDR2} alt="Hero Image" />
				<span>Action Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem}>
				<img src={Fifa} alt="Hero Image" />
				<span>Sports Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem}>
				<img src={GOW} alt="Hero Image" />
				<span>RPG Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem}>
				<img src={AOE4} alt="Hero Image" />
				<span>Strategy Games</span>
			</Link>
		</div>
	);
};

export default Categories;
