import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Header } from '../../Components';
import Filters from './Components/Filter/Filters';
import styles from './Products.module.css';

const Products = () => {
	return (
		<>
			<Header />
			<main className={styles.plPg}>
				<Filters />
				<section className={styles.productList}>
					<div className={styles.plBreadcrumb}>
						<Link to="/">Home</Link> {' > '}
						<Link to="/products" className={styles.currentPg}>
							Products
						</Link>
					</div>
					<Card />
					<Card />
					<Card />
					<Card />
				</section>
				<footer className={styles.filterFooter}>
					<button className="btn-primary">Filters</button>
					<button className="btn-primary">Sort</button>
				</footer>
			</main>
		</>
	);
};

export default Products;
