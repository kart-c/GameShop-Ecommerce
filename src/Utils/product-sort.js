export const productSort = (state, products) => {
	const discoutedPrice = (price, discount = 0) => price - (discount / 100) * price;

	if (state.sortBy === 'lowtohigh') {
		return [...products].sort(
			(product1, product2) =>
				discoutedPrice(product1.price, product1.discount) -
				discoutedPrice(product2.price, product2.discount)
		);
	}

	if (state.sortBy === 'hightolow') {
		return [...products].sort(
			(product1, product2) =>
				discoutedPrice(product2.price, product2.discount) -
				discoutedPrice(product1.price, product1.discount)
		);
	}

	return products;
};
