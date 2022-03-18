import React from 'react';
import { useFilter } from '../../../../Context';
import styles from './Filters.module.css';

const Filters = () => {
	const { state, dispatch } = useFilter();

	return (
		<aside className={styles.plAside}>
			<div className={styles.asideHeading}>
				<h4>Filters</h4>
				<button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
			</div>
			<div className={styles.asidePrice}>
				<label htmlFor="price">Price</label>
				<input
					type="range"
					min="0"
					max="5000"
					id="price"
					value={state.price}
					onChange={(e) => dispatch({ type: 'PRICE', payload: { price: e.target.value } })}
				/>
			</div>
			<div className={styles.asideGenre}>
				<span htmlFor="category">Genre</span>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input
						type="checkbox"
						name="category checkbox"
						id="category-checkbox-1"
						checked={state.category.includes('Action')}
						onChange={(e) =>
							dispatch({
								type: 'CATEGORY_FILTER',
								payload: { type: 'Action', isChecked: e.target.checked },
							})
						}
					/>
					<label htmlFor="category-checkbox-1">Action</label>
				</div>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input
						type="checkbox"
						name="category checkbox"
						id="category-checkbox-2"
						checked={state.category.includes('Sports')}
						onChange={(e) =>
							dispatch({
								type: 'CATEGORY_FILTER',
								payload: { type: 'Sports', isChecked: e.target.checked },
							})
						}
					/>
					<label htmlFor="category-checkbox-2">Sports</label>
				</div>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input
						type="checkbox"
						name="category checkbox"
						id="category-checkbox-3"
						checked={state.category.includes('RPG')}
						onChange={(e) =>
							dispatch({
								type: 'CATEGORY_FILTER',
								payload: { type: 'RPG', isChecked: e.target.checked },
							})
						}
					/>
					<label htmlFor="category-checkbox-3">RPG</label>
				</div>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input
						type="checkbox"
						name="category checkbox"
						id="category-checkbox-4"
						checked={state.category.includes('Strategy')}
						onChange={(e) =>
							dispatch({
								type: 'CATEGORY_FILTER',
								payload: { type: 'Strategy', isChecked: e.target.checked },
							})
						}
					/>
					<label htmlFor="category-checkbox-4">Strategy</label>
				</div>
			</div>
			<div className={styles.asideRating}>
				<span>Rating</span>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input
						type="radio"
						name="rating input"
						value="4"
						id="rating-input-1"
						checked={state.rating === 4}
						onChange={() => dispatch({ type: 'RATING_FILTER', payload: { value: 4 } })}
					/>
					<label htmlFor="rating-input-1">4 star and above</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input
						type="radio"
						name="rating input"
						value="3"
						id="rating-input-2"
						checked={state.rating === 3}
						onChange={() => dispatch({ type: 'RATING_FILTER', payload: { value: 3 } })}
					/>
					<label htmlFor="rating-input-2">3 star and above</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input
						type="radio"
						name="rating input"
						value="2"
						id="rating-input-3"
						checked={state.rating === 2}
						onChange={() => dispatch({ type: 'RATING_FILTER', payload: { value: 2 } })}
					/>
					<label htmlFor="rating-input-3">2 star and above</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input
						type="radio"
						name="rating input"
						value="1"
						id="rating-input-4"
						checked={state.rating === 1}
						onChange={() => dispatch({ type: 'RATING_FILTER', payload: { value: 1 } })}
					/>
					<label htmlFor="rating-input-4">1 star and above</label>
				</div>
			</div>
			<div className={styles.asideRating}>
				<span>Sort By</span>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input
						type="radio"
						name="sort input"
						id="sort-input-1"
						checked={state.sortBy === 'lowtohigh'}
						onChange={() => dispatch({ type: 'SORT', payload: { type: 'lowtohigh' } })}
					/>
					<label htmlFor="sort-input-1">Price - Low to High</label>
				</div>
				<div className={`radio-container ${styles.radioContainer}`}>
					<input
						type="radio"
						name="sort input"
						id="sort-input-2"
						checked={state.sortBy === 'hightolow'}
						onChange={() => dispatch({ type: 'SORT', payload: { type: 'hightolow' } })}
					/>
					<label htmlFor="sort-input-2">Price - High to Low</label>
				</div>
			</div>
			<div className={styles.asideRating}>
				<span htmlFor="category">Availability</span>
				<div className={`checkbox-container ${styles.checkboxContainer}`}>
					<input
						type="checkbox"
						name="stock checkbox"
						id="out-of-stock"
						checked={state.outOfStock}
						onChange={(e) =>
							dispatch({
								type: 'OUT_OF_STOCK',
								payload: { type: 'Action', isChecked: e.target.checked },
							})
						}
					/>
					<label htmlFor="out-of-stock">Remove out of Stock</label>
				</div>
			</div>
		</aside>
	);
};

export default Filters;
