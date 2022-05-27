import { Link } from 'react-router-dom';
import { Carousel, Categories, Footer } from './Components';
import { horizon } from '../../Assets/images';
import styles from './Home.module.css';

const Home = () => {
	return (
		<>
			<main className={styles.lpMain}>
				<section className={styles.heroImgContainer}>
					<Link to="/products">
						<img src={horizon} alt="Hero Image" className={styles.heroImg} />
					</Link>
				</section>
				<section>
					<div className={styles.lpTextContainer}>
						<h3>New Releases</h3>
						<Link to="/products">View All</Link>
					</div>
					<Carousel />
				</section>
				<section className={styles.lpCategory}>
					<h3>Featured Categories</h3>
					<Categories />
				</section>
				<div className={styles.lpCta}>
					<Link to="/products">Explore More</Link>
				</div>
			</main>
			<Footer />
		</>
	);
};

export { Home };
