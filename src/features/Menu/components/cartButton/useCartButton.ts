import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../store";

export const useCartButton = () => {
	const { state } = useLocation();
	const [isCartModalOpen, setIsCartModalOpen] = useState(state.showCart);

	const cartItems = useAppSelector((state) => state.cart);
	const cartItemsCount = Object.keys(cartItems).length;

	const isDisabled = cartItemsCount === 0;

	function showCartModal() {
		setIsCartModalOpen(true);
	}

	function hideCartModal() {
		setIsCartModalOpen(false);
	}

	return { cartItemsCount, showCartModal, hideCartModal, isCartModalOpen, isDisabled };
};
