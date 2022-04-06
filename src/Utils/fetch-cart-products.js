import axios from 'axios';

export const fetchCartProducts = async (token, cartDispatch, setIsLoading) => {
	try {
		const response = await axios.get('/api/user/cart', {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			setIsLoading(false);
			cartDispatch({ type: 'INITIAL', payload: response.data.cart });
		} else {
			console.error('ERROR: ', response);
		}
	} catch (error) {
		console.log('ERROR: ', error);
	}
};
