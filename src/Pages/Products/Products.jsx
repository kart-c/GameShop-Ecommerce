import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Header } from '../../Components';
import Filters from './Components/Filter/Filters';
import styles from './Products.module.css';
import { useAuth, useCart, useFilter } from '../../Context';
import {
	categoryFilter,
	checkInStock,
	priceFilter,
	productSort,
	ratingFilter,
	addToCartHandler,
} from '../../Utils/index';
import axios from 'axios';

const Products = () => {
	const { filterState } = useFilter();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const { authState } = useAuth();

	const { cartState, cartDispatch } = useCart();

	const navigate = useNavigate();

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

	const cartBtnHandler = async (_id) => {
		const product = products.find((product) => product._id === _id);
		if (authState.token) {
			const res = await addToCartHandler(product, authState.token);

			if (res.status === 201) {
				console.log(res);
				cartDispatch({ type: 'ADD_TO_CART', payload: res.data.cart });
			}
		} else {
			alert('You are not logged in');
			navigate('/login');
		}
	};

	const checkCartStatus = (_id) => {
		const itemInCart = cartState.cart.find((item) => item._id === _id);
		return itemInCart ? 'Go to Cart' : 'Add to Cart';
	};

	const removeFromStock = checkInStock(filterState, products);

	const selectedCategories = categoryFilter(filterState, removeFromStock);

	const selectedRating = ratingFilter(filterState, selectedCategories);

	const priceRangeHandler = priceFilter(filterState, selectedRating);

	const sortedProducts = productSort(filterState, priceRangeHandler);

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
									<Card
										{...product}
										cartBtnHandler={cartBtnHandler}
										checkCartStatus={checkCartStatus}
									/>
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
