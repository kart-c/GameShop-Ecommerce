import axios from 'axios';

export const getOrders = async (token, authDispatch) => {
	try {
		const response = await axios.get('/api/user/orders', { headers: { authorization: token } });
		console.log(response);
		if (response.status === 200) {
			authDispatch({ type: 'GET_ORDERS', payload: response.data.orders });
		}
	} catch (error) {
		console.error('ERROR', error);
	}
};
