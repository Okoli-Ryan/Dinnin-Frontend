import { parseCurrency } from "../../../../core/Utils";
import { useAppSelector } from "../../../../store";

export const useCheckoutPriceSummary = () => {
	const cart = useAppSelector((state) => state.cart);
	const cartItems = Object.values(cart);

	const subTotal = cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

	const fee = 0;

	const total = subTotal + fee;

	return {
		subTotal: parseCurrency(subTotal),
		total: parseCurrency(total),
		fee: parseCurrency(fee),
	};
};
