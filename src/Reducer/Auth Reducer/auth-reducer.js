export const authReducer = (state, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'INITIAL':
			return { ...state, token: payload.token, user: payload.user };

		case 'LOGIN':
			return { ...state, token: payload.token, user: payload.user };

		case 'SIGNUP':
			return { ...state, token: payload.token, user: payload.user };

		case 'LOGOUT':
			return { ...state, token: null, user: null };

		default:
			throw new Error('ERROR: action not defined');
	}
};
