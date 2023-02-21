import { ICartItem } from "../../../../domain/CartItem";

export const ParseCheckoutList = (cartItems: Record<string, ICartItem>) => {
	let result: Record<string, ICartItem[]> = {};

	const cartItemsArray = Object.values(cartItems);

	cartItemsArray.forEach((item) => {
		const category = item.categoryName;
		if (result[category]) {
			result[category].push(item);
		} else {
			result[category] = [item];
		}
	});

	return Object.entries(result);
};
