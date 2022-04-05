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
	const { filterState } = useFilter();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [filterDisplay, setFilterDisplay] = useState(false);

	// Fetch products from database
	const fetchProducts = async () => {
		try {
			const response = await axios.get('/api/products');
			if (response.status === 200) {
				setIsLoading(false);
				setIsError(false);
				setProducts(response.data.products);
			} else {
				console.error('ERROR: ', response);
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

	const removeFromStock = checkInStock(filterState, products);

	const selectedCategories = categoryFilter(filterState, removeFromStock);

	const selectedRating = ratingFilter(filterState, selectedCategories);

	const priceRangeHandler = priceFilter(filterState, selectedRating);

	const sortedProducts = productSort(filterState, priceRangeHandler);

	return (
		<>
			<div
				className={`${styles.backdrop} ${filterDisplay ? styles.active : ''}`}
				onClick={() => setFilterDisplay(false)}
			></div>
			<Header />
			<main className={styles.plPg}>
				<Filters filterDisplay={filterDisplay} />
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
									<Card {...product} products={products} />
								</li>
							))
						) : (
							<h2>No Products found</h2>
						)
					) : null}
				</ul>
				<footer className={styles.filterFooter}>
					<button className="btn-primary" onClick={() => setFilterDisplay(!filterDisplay)}>
						Filters
						<i className={`fa-solid ${filterDisplay ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
					</button>
				</footer>
			</main>
		</>
	);
};

export default Products;
