import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header } from '../../Components';
import Filters from './Components/Filter/Filters';
import styles from './Products.module.css';
import axios from 'axios';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	console.log(products);

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
					{products.length > 1 &&
						products.map((product) => (
							<li key={product.id}>
								<Card {...product} />
							</li>
						))}
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
