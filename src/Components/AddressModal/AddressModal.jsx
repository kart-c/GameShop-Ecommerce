import React from 'react';
import styles from './AddressModal.module.css';

const AddressModal = ({ modalState, setModalState }) => {
	return (
		<>
			<div className={`modal-backdrop ${styles.backdrop} ${!modalState ? styles.hide : ''}`}></div>
			<form className={`modal ${styles.modal} ${!modalState ? styles.hide : ''}`}>
				<input type="text" id="full-name" name="full-name" placeholder="Enter Full Name" required />
				<input type="text" id="address" name="address" placeholder="Enter your Address" required />
				<input type="text" id="city" name="city" placeholder="Enter your City" required />
				<input
					type="number"
					id="pincode"
					name="pincode"
					placeholder="Enter your Pincode"
					required
				/>
				<input type="text" id="state" name="state" placeholder="Enter your State" required />
				<input
					type="number"
					id="phone"
					name="phone"
					placeholder="Enter your phone number"
					required
				/>
				<div className={styles.btnContainer}>
					<button className="btn btn-info" onClick={() => setModalState(false)} type="button">
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
