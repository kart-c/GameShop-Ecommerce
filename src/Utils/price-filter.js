export const priceFilter = (state, products) =>
	products.filter((product) => product.price < state.price);
