export const cartReducer = (state, action) => {
	const { payload } = action;

	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, cart: payload };
		default:
			throw new Error('NO CASE FOUND IN CART REDUCER');
	}
};
