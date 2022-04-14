import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Header, Loaders } from '../../Components';
import styles from './SingleProduct.module.css';

const SingleProduct = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const params = useParams();

	const fetchProduct = async () => {
		try {
			const response = await axios.get(`/api/products/${params._id}`);
			if (response.status === 200) {
				setIsLoading(false);
				setProduct(response.data.product);
			} else {
				console.log('ERROR: ', response);
			}
		} catch (error) {
			console.log('ERROR: ', error);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	const discoutedPrice = (price, discount) => (price - (price * discount) / 100).toFixed(0);

	const ratings = [1, 2, 3, 4, 5];

	return (
		<>
			<Header />
			{isLoading && <Loaders />}
			<div className={styles.plBreadcrumbContainer}>
				<div>
					<Link to="/">Home</Link> {' > '}
					<Link to="/products">Products</Link>
					{' > '}
					<Link to={`/products/${params._id}`} className={styles.currentPg}>
						{product.title}
					</Link>
				</div>
			</div>
			<section className={styles.productPg}>
				<div className={styles.imgContainer}>
					<img
						src={product.image}
						alt={product.title}
						className={`resp-img ${styles.productImg}`}
					/>
				</div>
				<div className={styles.content}>
					<h2 className={styles.productHeading}>{product.title}</h2>
					<h4 className={styles.categoryHeading}>Category - {product.categoryName}</h4>
					<div className="rating-container md">
						{ratings.map((rating) => (
							<i
								key={rating}
								className={`${
									rating <= product.rating
										? 'fas fa-star'
										: rating === Math.ceil(product.rating)
										? 'fas fa-star-half-stroke'
										: 'far fa-star'
								}`}
							></i>
						))}
						<span className={styles.reviews}>({product.reviewers} reviews)</span>
					</div>
					<span className={styles.price}>{product.price}</span>
					<span>₹ {discoutedPrice(product.price, product.discount)}/-</span>
					<p className={styles.description}>{product.description}</p>
					<div className={styles.btnContainer}>
						<button className={`btn btn-primary ${styles.primaryBtn}`}>Add to Cart</button>
						<button className={`btn outline-primary ${styles.secondaryBtn}`}>
							Add to Wishlist
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export { SingleProduct };
