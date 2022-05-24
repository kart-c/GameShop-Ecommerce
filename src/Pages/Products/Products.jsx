import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header, Loaders } from '../../Components';
import Filters from './Components/Filter/Filters';
import { useFilter } from '../../Context';
import {
	categoryFilter,
	checkInStock,
	priceFilter,
	productSort,
	ratingFilter,
	searchProducts,
} from '../../Utils';
import axios from 'axios';
import styles from './Products.module.css';

const Products = () => {
	const { filterState } = useFilter();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [filterDisplay, setFilterDisplay] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [currentPg, setCurrentPg] = useState(1);
	const [pages, setPages] = useState([]);
	const [currentSlice, setCurrentSlice] = useState({ start: 0, end: 6 });

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

	const searchedProducts = searchProducts(sortedProducts, searchValue);

	useEffect(() => {
		setCurrentSlice((prev) => ({ ...prev, start: currentPg * 6 - 6, end: currentPg * 6 }));

		window.scrollTo(0, 0);
	}, [currentPg]);

	const slicedProducts = searchedProducts.slice(currentSlice.start, currentSlice.end);

	useEffect(() => {
		const num = Math.ceil(searchedProducts.length / 6);
		if (num) {
			setPages([]);
			for (let i = 0; i < num; i++) {
				setPages((prev) => [...prev, i]);
			}
		}

		if (slicedProducts.length < 6) {
			setCurrentPg(1);
		}
	}, [searchedProducts.length]);

	const paginationHandler = (page) => setCurrentPg(page + 1);

	return (
		<>
			<div
				className={`${styles.backdrop} ${filterDisplay ? styles.active : ''}`}
				onClick={() => setFilterDisplay(false)}
			></div>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<main className={styles.plPg}>
				<Filters filterDisplay={filterDisplay} />
				<ul className={styles.productList}>
					<div className={styles.plBreadcrumbContainer}>
						<div>
							<Link to="/">Home</Link> {' > '}
							<Link to="/products" className={styles.currentPg}>
								Products
							</Link>
						</div>
						{slicedProducts.length > 0 && (
							<span>
								Showing {slicedProducts.length} {slicedProducts.length > 1 ? 'products' : 'product'}
							</span>
						)}
					</div>
					{isLoading && <Loaders />}
					{isError && <h2>Error ...</h2>}
					{!isLoading && !isError ? (
						slicedProducts.length > 0 ? (
							slicedProducts.map((product) => (
								<li key={product.id}>
									<Card {...product} products={products} />
								</li>
							))
						) : (
							<h2>No Products found</h2>
						)
					) : null}
					<div className={styles.pgButtonContainer}>
						{pages.length > 0
							? pages.map((page) => (
									<button
										key={page}
										className={currentPg === page + 1 ? styles.pgActiveBtn : ''}
										onClick={() => paginationHandler(page)}
									>
										{page + 1}
									</button>
							  ))
							: null}
					</div>
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

export { Products };
