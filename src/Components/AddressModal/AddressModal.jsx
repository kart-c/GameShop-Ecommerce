import React from 'react';
import { useAuth } from '../../Context';
import { addNewAddress } from '../../Utils';
import styles from './AddressModal.module.css';

const AddressModal = ({ modalState, setModalState, address, setAddress }) => {
	const {
		authState: { token },
		authDispatch,
	} = useAuth();
	const inputHandler = (e) => {
		const {
			target: { name },
		} = e;
		const {
			target: { value },
		} = e;
		setAddress((prev) => ({ ...prev, [name]: value }));
	};

	const saveBtnHandler = (e) => {
		if (
			address.name &&
			address.street &&
			address.city &&
			address.zipCode &&
			address.state &&
			address.mobile
		) {
			e.preventDefault();
			addNewAddress(token, address, authDispatch);
			setAddress((prev) => ({
				...prev,
				name: '',
				street: '',
				city: '',
				zipCode: '',
				state: '',
				mobile: '',
			}));
			setModalState(false);
		}
	};

	return (
		<>
			<div className={`modal-backdrop ${styles.backdrop} ${!modalState ? styles.hide : ''}`}></div>
			<form className={`modal ${styles.modal} ${!modalState ? styles.hide : ''}`}>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter Full Name"
					value={address.name}
					onChange={inputHandler}
					required
				/>
				<input
					type="text"
					id="street"
					name="street"
					placeholder="Enter your Street"
					value={address.street}
					onChange={inputHandler}
					required
				/>
				<input
					type="text"
					id="city"
					name="city"
					placeholder="Enter your City"
					value={address.city}
					onChange={inputHandler}
					required
				/>
				<input
					type="number"
					id="zipCode"
					name="zipCode"
					placeholder="Enter your Pincode"
					value={address.zipCode}
					onChange={inputHandler}
					required
				/>
				<input
					type="text"
					id="state"
					name="state"
					placeholder="Enter your State"
					value={address.state}
					onChange={inputHandler}
					required
				/>
				<input
					type="number"
					id="mobile"
					name="mobile"
					placeholder="Enter your phone number"
					value={address.mobile}
					onChange={inputHandler}
					required
				/>
				<div className={styles.btnContainer}>
					<button className="btn btn-info" onClick={saveBtnHandler} type="submit">
						Save
					</button>
					<button className="btn btn-primary" onClick={() => setModalState(false)} type="button">
						Cancel
					</button>
				</div>
			</form>
		</>
	);
};

export { AddressModal };
