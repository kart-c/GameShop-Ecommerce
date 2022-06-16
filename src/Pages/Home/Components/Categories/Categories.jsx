import React from 'react';
import { Link } from 'react-router-dom';
import { RDR2, Fifa, AOE4, GOW } from '../../../../Assets/images';
import { useFilter } from '../../../../Context';
import styles from './Categories.module.css';

const Categories = () => {
	const { filterDispatch } = useFilter();

	const filterFromHome = (category) => {
		filterDispatch({ type: 'CLEAR' });
		filterDispatch({ type: 'CATEGORY_FILTER', payload: { type: category } });
	};

	return (
		<div className={styles.categoryList}>
			<Link to="/products" className={styles.categoryItem} onClick={() => filterFromHome('Action')}>
				<img src={RDR2} alt="Hero Image" />
				<span>Action Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem} onClick={() => filterFromHome('Sports')}>
				<img src={Fifa} alt="Hero Image" />
				<span>Sports Games</span>
			</Link>
			<Link to="/products" className={styles.categoryItem} onClick={() => filterFromHome('RPG')}>
				<img src={GOW} alt="Hero Image" />
				<span>RPG Games</span>
			</Link>
			<Link
				to="/products"
				className={styles.categoryItem}
				onClick={() => filterFromHome('Strategy')}
			>
				<img src={AOE4} alt="Hero Image" />
				<span>Strategy Games</span>
			</Link>
		</div>
	);
};

export { Categories };
