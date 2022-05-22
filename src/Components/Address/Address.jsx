import { useState, useEffect } from 'react';
import { useAuth } from '../../Context';
import { getAddress } from '../../Utils';
import { AddressModal } from '../index';
import styles from './Address.module.css';

const Address = () => {
	const [modalState, setModalState] = useState(false);
	const [isEditing, setIsEditing] = useState({ editing: false, _id: '' });
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

	const editBtnHandler = (_id) => {
		const address = userAddress.find((user) => user._id === _id);
		setAddress((prev) => ({
			...prev,
			name: address.name,
			street: address.street,
			city: address.city,
			zipCode: address.zipCode,
			state: address.state,
			mobile: address.mobile,
		}));
		setModalState(true);
		setIsEditing((prev) => ({ ...prev, _id: address._id, editing: true }));
	};

	return (
		<>
			<AddressModal
				modalState={modalState}
				setModalState={setModalState}
				address={address}
				setAddress={setAddress}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
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
									<button onClick={() => editBtnHandler(address._id)}>Edit</button> |{' '}
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
