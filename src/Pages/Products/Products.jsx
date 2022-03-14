import React from 'react';
import { Card, Header } from '../../Components';
import Filters from './Components/Filters';
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
				<footer class="filter-footer">
					<button class="btn-primary">Filters</button>
					<button class="btn-primary">Sort</button>
				</footer>
			</main>
		</>
	);
};

export default Products;
