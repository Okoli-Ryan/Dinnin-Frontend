import { CartItem, ICartItem } from "../../../../domain/CartItem";
import { dispatch, useAppSelector } from "../../../../store";

export const useMenuItem = (menuItem: ICartItem) => {
	const cart = useAppSelector((state) => state.cart);

	const isSelected = cart[menuItem.id];

	function selectMenuItem() {
		dispatch.cart.select(new CartItem(menuItem));
	}

	return { isSelected, selectMenuItem };
};
