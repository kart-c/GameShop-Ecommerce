import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Carousel.module.css';
import { Carousel1 } from '../../../../Assets/images';

const Carousel = () => {
	return (
		<div className={styles.lpCarouselContainer}>
			<Link to="/products">
				<img src={Carousel1} alt="carousel image 1" className="resp-img" />
			</Link>
			<i className={`fa-solid fa-circle-chevron-left ${styles.carouselLeft}`}></i>
			<i className={`fa-solid fa-circle-chevron-right ${styles.carouselRight}`}></i>
		</div>
	);
};

export default Carousel;
