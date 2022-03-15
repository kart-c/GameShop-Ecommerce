import React from 'react';
import { Link } from 'react-router-dom';
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
						<Link to="/">Home</Link> {' > '}
						<Link to="/products" className="current-pg">
							Products
						</Link>
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
