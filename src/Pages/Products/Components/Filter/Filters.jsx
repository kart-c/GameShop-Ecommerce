import React from 'react';
import styles from './Filters.module.css';

const Filters = () => {
	return (
		<aside className={styles.plAside}>
			<div className={styles.asideHeading}>
				<h4>Filters</h4>
				<button>Clear</button>
			</div>
			<div className={styles.asidePrice}>
				<label htmlFor="price">Price</label>
				<input type="range" min="1000" max="10000" id="price" />
			</div>
			<div className={styles.asideGenre}>
				<span htmlFor="price">Genre</span>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input type="checkbox" name="disabled example input" id="price-checkbox-1" />
					<label htmlFor="price-checkbox-1">Action</label>
				</div>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input type="checkbox" name="disabled example input" id="price-checkbox-2" />
					<label htmlFor="price-checkbox-2">Sports</label>
				</div>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input type="checkbox" name="disabled example input" id="price-checkbox-3" />
					<label htmlFor="price-checkbox-3">RPG</label>
				</div>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input type="checkbox" name="disabled example input" id="price-checkbox-4" />
					<label htmlFor="price-checkbox-4">Strategy</label>
				</div>
			</div>
			<div className={styles.asideRating}>
				<span>Rating</span>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input type="radio" name="example input" id="rating-input-1" />
					<label htmlFor="rating-input-1">4 star and above</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input type="radio" name="example input" id="rating-input-2" />
					<label htmlFor="rating-input-2">3 star and above</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input type="radio" name="example input" id="rating-input-3" />
					<label htmlFor="rating-input-3">2 star and above</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input type="radio" name="example input" id="rating-input-4" />
					<label htmlFor="rating-input-4">1 star and above</label>
				</div>
			</div>
			<div className="aside-rating">
				<span>Sort By</span>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input type="radio" name="example input" id="sort-input-1" />
					<label htmlFor="sort-input-1">Price - Low to High</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input type="radio" name="example input" id="price-input-2" />
					<label htmlFor="price-input-2">Price - High to Low</label>
				</div>
			</div>
		</aside>
	);
};

export default Filters;
