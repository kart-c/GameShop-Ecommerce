import React from 'react';
import styles from './Orders.module.css';

const Orders = () => {
	return (
		<div className={styles.orderContainer}>
			<article className={styles.order}>
				<span className={styles.orderId}>Order Id #f3386752-a980-477d-b6ef-012c9377e44d</span>
				<div className={styles.orderPrice}>
					<span className={styles.priceTitle}>Price</span>
					<span>Total Price - 1000 /-</span>
					<span>Total Discount - 1000 /-</span>
					<span>Amount Paid - 1000 /-</span>
				</div>
				<p>Delivered At - 15, Plot No11, East St, Sec 12 D, Mumbai - 754162, Maharashtra</p>
				<div className={styles.productCard}>
					<img src="https://picsum.photos/300" alt="order image" />
					<span>Fifa 2022</span>
				</div>
			</article>
		</div>
	);
};

export { Orders };
