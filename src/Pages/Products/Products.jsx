import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header } from '../../Components';
import Filters from './Components/Filter/Filters';
import styles from './Products.module.css';
import { useFilter } from '../../Context';
import {
	categoryFilter,
	checkInStock,
	priceFilter,
	productSort,
	ratingFilter,
} from '../../Utils/index';
import axios from 'axios';

const Products = () => {
	const { state } = useFilter();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	// Fetch products from database
	const fetchProducts = async () => {
		try {
			const response = await axios.get('/api/products');
			if (response.status === 200) {
				setIsLoading(false);
				setIsError(false);
				setProducts(response.data.products);
			}
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			console.error('ERROR: ', error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const removeFromStock = checkInStock(state, products);

	const selectedCategories = categoryFilter(state, removeFromStock);

	const selectedRating = ratingFilter(state, selectedCategories);

	const priceRangeHandler = priceFilter(state, selectedRating);

	const sortedProducts = productSort(state, priceRangeHandler);

	return (
		<>
			<Header />
			<main className={styles.plPg}>
				<Filters />
				<ul className={styles.productList}>
					<div className={styles.plBreadcrumb}>
						<Link to="/">Home</Link> {' > '}
						<Link to="/products" className={styles.currentPg}>
							Products
						</Link>
					</div>
					{isLoading && <h2>Loading ...</h2>}
					{isError && <h2>Error ...</h2>}
					{!isLoading && !isError ? (
						sortedProducts.length > 0 ? (
							sortedProducts.map((product) => (
								<li key={product.id}>
									<Card {...product} />
								</li>
							))
						) : (
							<h2>No Products found</h2>
						)
					) : null}
				</ul>
				<footer className={styles.filterFooter}>
					<button className="btn-primary">Filters</button>
					<button className="btn-primary">Sort</button>
				</footer>
			</main>
		</>
	);
};

export default Products;
