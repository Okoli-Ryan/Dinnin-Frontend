import { ICartItem } from "../../../../domain/CartItem";
import { dispatch, useAppSelector } from "../../../../store";

export const useMenuItem = (menuItem: ICartItem) => {
	const cart = useAppSelector((state) => state.cart);

	const isSelected = cart[menuItem.id];

	function selectMenuItem() {
		dispatch.cart.select(menuItem);
	}

	return { isSelected, selectMenuItem };
};
