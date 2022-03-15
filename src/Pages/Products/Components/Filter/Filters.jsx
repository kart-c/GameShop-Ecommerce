import React from 'react';
import './Filters.css';

const Filters = () => {
	return (
		<aside className="pl-aside">
			<div className="aside-heading">
				<h4>Filters</h4>
				<button>Clear</button>
			</div>
			<div className="aside-price">
				<label for="price">Price</label>
				<input type="range" min="1000" max="10000" id="price" />
			</div>
			<div className="aside-genre">
				<span for="price">Genre</span>
				<div className="checkbox-container">
					<input type="checkbox" name="disabled example input" id="price-checkbox-1" />
					<label for="price-checkbox-1">Action</label>
				</div>
				<div className="checkbox-container">
					<input type="checkbox" name="disabled example input" id="price-checkbox-2" />
					<label for="price-checkbox-2">Sports</label>
				</div>
				<div className="checkbox-container">
					<input type="checkbox" name="disabled example input" id="price-checkbox-3" />
					<label for="price-checkbox-3">RPG</label>
				</div>
				<div className="checkbox-container">
					<input type="checkbox" name="disabled example input" id="price-checkbox-4" />
					<label for="price-checkbox-4">Strategy</label>
				</div>
			</div>
			<div className="aside-rating">
				<span>Rating</span>
				<div className="radio-container">
					<input type="radio" name="example input" id="rating-input-1" />
					<label for="rating-input-1">4 star and above</label>
				</div>
				<div className="radio-container">
					<input type="radio" name="example input" id="rating-input-2" />
					<label for="rating-input-2">3 star and above</label>
				</div>
				<div className="radio-container">
					<input type="radio" name="example input" id="rating-input-3" />
					<label for="rating-input-3">2 star and above</label>
				</div>
				<div className="radio-container">
					<input type="radio" name="example input" id="rating-input-4" />
					<label for="rating-input-4">1 star and above</label>
				</div>
			</div>
			<div className="aside-rating">
				<span>Sort By</span>
				<div className="radio-container">
					<input type="radio" name="example input" id="sort-input-1" />
					<label for="sort-input-1">Price - Low to High</label>
				</div>
				<div className="radio-container">
					<input type="radio" name="example input" id="price-input-2" />
					<label for="price-input-2">Price - High to Low</label>
				</div>
			</div>
		</aside>
	);
};

export default Filters;
