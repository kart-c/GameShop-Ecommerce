import React from 'react';
import { Link } from 'react-router-dom';
import { RDR2, Fifa, AOE4, GOW } from '../../../../Assets/images';
import { useFilter } from '../../../../Context';
import styles from './Categories.module.css';

const Categories = () => {
	const { filterDispatch } = useFilter();

	return (
		<div className={styles.categoryList}>
			<Link
				to="/products"
				className={styles.categoryItem}
				onClick={() =>
					filterDispatch({
						type: 'CATEGORY_FILTER',
						payload: { type: 'Action', isChecked: true },
					})
				}
			>
				<img src={RDR2} alt="Hero Image" />
				<span>Action Games</span>
			</Link>
			<Link
				to="/products"
				className={styles.categoryItem}
				onClick={() =>
					filterDispatch({
						type: 'CATEGORY_FILTER',
						payload: { type: 'Sports', isChecked: true },
					})
				}
			>
				<img src={Fifa} alt="Hero Image" />
				<span>Sports Games</span>
			</Link>
			<Link
				to="/products"
				className={styles.categoryItem}
				onClick={() =>
					filterDispatch({
						type: 'CATEGORY_FILTER',
						payload: { type: 'RPG', isChecked: true },
					})
				}
			>
				<img src={GOW} alt="Hero Image" />
				<span>RPG Games</span>
			</Link>
			<Link
				to="/products"
				className={styles.categoryItem}
				onClick={() =>
					filterDispatch({
						type: 'CATEGORY_FILTER',
						payload: { type: 'Strategy', isChecked: true },
					})
				}
			>
				<img src={AOE4} alt="Hero Image" />
				<span>Strategy Games</span>
			</Link>
		</div>
	);
};

export default Categories;
