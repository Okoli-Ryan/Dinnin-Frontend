import { useState } from "react";

import { useAppSelector } from "../../../../store";

export const useCartList = () => {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const cart = useAppSelector((state) => state.cart);
	const cartItems = Object.values(cart);

	return { showDeleteModal, setShowDeleteModal, cartItems };
};
