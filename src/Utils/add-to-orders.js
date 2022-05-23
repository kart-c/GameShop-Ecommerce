import axios from 'axios';

export const addToOrders = async (token, order) => {
	try {
		const response = await axios.post(
			'/api/user/orders',
			{ order },
			{ headers: { authorization: token } }
		);
		console.log(response);
	} catch (error) {
		console.error('ERROR', error);
	}
};
