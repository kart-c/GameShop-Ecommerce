import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import Carousel from './Components/Carousel/Carousel';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import styles from './Home.module.css';
import { horizon } from '../../Assets/images';

const Home = () => {
	return (
		<>
			<Header />
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
					<button className="btn btn-primary">
						<Link to="/products">Explore More</Link>
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
};

export { Home };
