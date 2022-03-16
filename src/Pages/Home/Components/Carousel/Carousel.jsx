import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { carouselImgs } from '../../../../Assets/images';
import styles from './Carousel.module.css';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const carouselHandler = (btnName) => {
		if (btnName === 'prev') {
			currentIndex === 0
				? setCurrentIndex(carouselImgs.length - 1)
				: setCurrentIndex((prev) => prev - 1);
		}
		if (btnName === 'next') {
			currentIndex === carouselImgs.length - 1
				? setCurrentIndex(0)
				: setCurrentIndex((prev) => prev + 1);
		}
	};

	return (
		<div className={styles.lpCarouselContainer}>
			<Link to="/products">
				<img src={carouselImgs[currentIndex]} alt="carousel image 1" className="resp-img" />
			</Link>
			<button className={styles.carouselLeft} onClick={() => carouselHandler('prev')}>
				<i className="fa-solid fa-circle-chevron-left"></i>
			</button>
			<button className={styles.carouselRight} onClick={() => carouselHandler('next')}>
				<i className="fa-solid fa-circle-chevron-right"></i>
			</button>
		</div>
	);
};

export default Carousel;
