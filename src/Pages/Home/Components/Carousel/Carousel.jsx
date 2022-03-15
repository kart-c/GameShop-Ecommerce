import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import { Carousel1_1, Carousel1_2 } from '../../../../Assets/images';

const Carousel = () => {
	return (
		<div className="lp-carousel-container">
			<Link to="/products">
				<picture>
					<source srcSet={Carousel1_1} />
					<img src={Carousel1_2} alt="carousel image 1" className="resp-img" />
				</picture>
			</Link>
			<i className="fa-solid fa-circle-chevron-left carousel-left"></i>
			<i className="fa-solid fa-circle-chevron-right carousel-right"></i>
		</div>
	);
};

export default Carousel;
