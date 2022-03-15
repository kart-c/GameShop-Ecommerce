import React from 'react';
import './Carousel.css';

const Carousel = () => {
	return (
		<div className="lp-carousel-container">
			<a href="#">
				<img
					src="./Assets/wallpaperflare.com_wallpaper.jpg"
					alt="carousel image 1"
					className="resp-img"
				/>
			</a>
			<i className="fa-solid fa-circle-chevron-left carousel-left"></i>
			<i className="fa-solid fa-circle-chevron-right carousel-right"></i>
		</div>
	);
};

export default Carousel;
