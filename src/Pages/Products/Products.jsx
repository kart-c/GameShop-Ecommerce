import React from 'react';
import { Card, Header } from '../../Components';
import Filters from './Components/Filter/Filters';
import './Products.css';

const Products = () => {
	return (
		<>
			<Header />
			<main className="pl-pg">
				<Filters />
				<section className="product-list">
					<div className="pl-breadcrumb">
						<a href="../../index.html">Home</a> {' > '}
						<a href="#" className="current-pg">
							Products
						</a>
					</div>
					<Card />
					<Card />
					<Card />
					<Card />
				</section>
				<footer className="filter-footer">
					<button className="btn-primary">Filters</button>
					<button className="btn-primary">Sort</button>
				</footer>
			</main>
		</>
	);
};

export default Products;
