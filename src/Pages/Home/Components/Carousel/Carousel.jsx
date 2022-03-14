import React from 'react';
import './Carousel.css';

const Carousel = () => {
	return (
		<div class="lp-carousel-container">
			<a href="#">
				<img
					src="./Assets/wallpaperflare.com_wallpaper.jpg"
					alt="carousel image 1"
					class="resp-img"
				/>
			</a>
			<i class="fa-solid fa-circle-chevron-left carousel-left"></i>
			<i class="fa-solid fa-circle-chevron-right carousel-right"></i>
		</div>
	);
};

export default Carousel;
