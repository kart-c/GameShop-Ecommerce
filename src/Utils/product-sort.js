export const productSort = (state, products) => {
	if (state.sortBy === 'lowtohigh') {
		return [...products].sort((product1, product2) => product1.price - product2.price);
	}
	if (state.sortBy === 'hightolow') {
		return [...products].sort((product1, product2) => product2.price - product1.price);
	}
	return products;
};
