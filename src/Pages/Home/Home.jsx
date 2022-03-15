import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import Carousel from './Components/Carousel/Carousel';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import './Home.css';

const Home = () => {
	return (
		<>
			<Header />
			<main className="lp-main">
				<section className="hero-img-container">
					<Link to="/products">
						<picture>
							<source srcSet="./Assets/hero-image.webp" className="hero-img" />
							<source srcSet="./Assets/hero-image-2.jpg" className="hero-img" />
							<img src="./Assets/hero-image-3.jpg" alt="Hero Image" className="hero-img" />
						</picture>
					</Link>
				</section>
				<section>
					<div className="lp-text-container">
						<h3>New Releases</h3>
						<Link to="/products">View All</Link>
					</div>
					<Carousel />
				</section>
				<section className="lp-category">
					<h3>Featured Categories</h3>
					<Categories />
				</section>
				<div className="lp-cta">
					<button className="btn btn-primary">
						<Link to="/products">Explore More</Link>
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
