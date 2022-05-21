import { useState, useEffect } from 'react';
import { useAuth } from '../../Context';
import { getAddress } from '../../Utils/';
import { AddressModal } from '../index';
import styles from './Address.module.css';

const Address = () => {
	const [modalState, setModalState] = useState(false);
	const [address, setAddress] = useState({
		name: '',
		street: '',
		city: '',
		zipCode: '',
		state: '',
		mobile: '',
	});
	const {
		authState: { token, address: userAddress },
		authDispatch,
	} = useAuth();

	useEffect(() => {
		getAddress(token, authDispatch);
	}, []);

	return (
		<>
			<AddressModal
				modalState={modalState}
				setModalState={setModalState}
				address={address}
				setAddress={setAddress}
			/>
			<div className={styles.container}>
				<button className={styles.newBtn} onClick={() => setModalState(true)}>
					Add new <i className="fa-solid fa-plus"></i>
				</button>
				{userAddress.length > 0
					? userAddress.map((address) => (
							<article className={styles.card} key={address._id}>
								<h4>{address.name}</h4>
								<p>{`${address.street}, ${address.city} - ${address.zipCode}`}</p>
								<span>{address.state}</span>
								<span>Mob - {address.mobile}</span>
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
