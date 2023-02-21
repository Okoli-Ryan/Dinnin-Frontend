import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppSelector } from "../../../../store";

export const useCartButton = () => {
	const navigate = useNavigate();
	const [isCartModalOpen, setIsCartModalOpen] = useState(false);
	const { slug } = useParams();

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
