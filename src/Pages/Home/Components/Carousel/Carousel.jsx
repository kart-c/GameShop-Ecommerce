import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import { Carousel1 } from '../../../../Assets/images';

const Carousel = () => {
	return (
		<div className="lp-carousel-container">
			<Link to="/products">
				<img src={Carousel1} alt="carousel image 1" className="resp-img" />
			</Link>
			<i className="fa-solid fa-circle-chevron-left carousel-left"></i>
			<i className="fa-solid fa-circle-chevron-right carousel-right"></i>
		</div>
	);
};

export default Carousel;
