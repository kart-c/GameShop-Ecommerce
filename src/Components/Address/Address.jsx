import { useState, useEffect } from 'react';
import { useAuth } from '../../Context';
import { getAddress } from '../../Utils/';
import { AddressModal } from '../index';
import styles from './Address.module.css';

const Address = () => {
	const [modalState, setModalState] = useState(false);
	const {
		authState: { token, address },
		authDispatch,
	} = useAuth();

	useEffect(() => {
		getAddress(token, authDispatch);
	}, []);

	return (
		<>
			<AddressModal modalState={modalState} setModalState={setModalState} />
			<div className={styles.container}>
				<button className={styles.newBtn} onClick={() => setModalState(true)}>
					Add new <i className="fa-solid fa-plus"></i>
				</button>
				{address.length > 0
					? address.map((userAddress) => (
							<article className={styles.card} key={userAddress._id}>
								<h4>{userAddress.name}</h4>
								<p>{`${userAddress.street}, ${userAddress.city} - ${userAddress.zipCode}`}</p>
								<span>{userAddress.state}</span>
								<span>Mob - {userAddress.mobile}</span>
								<div className={styles.btnContainer}>
									<button onClick={() => setModalState(true)}>Edit</button> |{' '}
									<button>Delete</button>
								</div>
							</article>
					  ))
					: null}
			</div>
		</>
	);
};

export { Address };
