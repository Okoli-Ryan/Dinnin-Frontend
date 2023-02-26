import { useState } from "react";

import { useAppSelector } from "../../../../store";

export const useCartButton = () => {
	const [isCartModalOpen, setIsCartModalOpen] = useState(false);

	const cartItems = useAppSelector((state) => state.cart);
	const cartItemsCount = Object.keys(cartItems).length;

	function showCartModal() {
		setIsCartModalOpen(true);
	}

	function hideCartModal() {
		setIsCartModalOpen(false);
	}

	return { cartItemsCount, showCartModal, hideCartModal, isCartModalOpen };
};
