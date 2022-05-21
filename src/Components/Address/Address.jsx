import React from 'react';
import styles from './Address.module.css';

const Address = () => {
	return (
		<div className={styles.container}>
			<button className={styles.newBtn}>
				Add new <i className="fa-solid fa-plus"></i>
			</button>
			<article className={styles.card}>
				<h4>Adarsh Balika</h4>
				<p>15, Plot No11, East St, Sec 12 D, Mumbai - 754162</p>
				<span>Maharashtra</span>
				<span>Mob - 1122334455</span>
				<div className={styles.btnContainer}>
					<button>Edit</button> | <button>Delete</button>
				</div>
			</article>
		</div>
	);
};

export { Address };
