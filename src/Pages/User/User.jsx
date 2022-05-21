import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../../Components';
import styles from './User.module.css';

const User = () => {
	const [activeTab, setActiveTab] = useState('profile');

	const navigate = useNavigate();

	useEffect(() => {
		navigate(`${activeTab}`);
	}, [activeTab]);

	return (
		<>
			<Header />
			<nav className={styles.userNav}>
				<button
					className={activeTab === 'profile' ? styles.active : ''}
					onClick={() => setActiveTab('profile')}
				>
					Profile
				</button>
				<button
					className={activeTab === 'address' ? styles.active : ''}
					onClick={() => setActiveTab('address')}
				>
					Address
				</button>
				<button
					className={activeTab === 'orders' ? styles.active : ''}
					onClick={() => setActiveTab('orders')}
				>
					Orders
				</button>
			</nav>
			<section className={styles.container}>
				<h3 className={styles.containerTitle}>My Profile</h3>
				<Outlet />
			</section>
		</>
	);
};

export { User };
