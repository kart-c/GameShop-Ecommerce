import React from 'react';
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
					<a href="#">
						<picture>
							<source srcset="./Assets/hero-image.webp" className="hero-img" />
							<source srcset="./Assets/hero-image-2.jpg" className="hero-img" />
							<img src="./Assets/hero-image-3.jpg" alt="Hero Image" className="hero-img" />
						</picture>
					</a>
				</section>
				<section>
					<div class="lp-text-container">
						<h3>New Releases</h3>
						<a href="./pages/product-listing/product-listing.html">View All</a>
					</div>
					<Carousel />
				</section>
				<section class="lp-category">
					<h3>Featured Categories</h3>
					<Categories />
				</section>
				<div class="lp-cta">
					<button class="btn btn-primary">
						<a href="./pages/product-listing/product-listing.html">Explore More</a>
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
