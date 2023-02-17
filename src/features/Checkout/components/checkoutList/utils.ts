import { CartItem } from '../../../../domain/CartItem';

export const ParseCheckoutList = (cartItems: Array<CartItem>) => {
	let result: Record<string, CartItem[]> = {};

	cartItems.forEach((item) => {
		const category = item.category!;
		if (result[category]) {
			result[category].push(item);
		} else {
			result[category] = [item];
		}
	});

	return Object.values(result);
};
