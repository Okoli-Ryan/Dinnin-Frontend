import { useNavigate, useParams } from "react-router-dom";

import { useAppSelector } from "../../../../store";

export const useCartButton = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	const cartItems = useAppSelector((state) => state.cart);
	const cartItemsCount = Object.keys(cartItems).length;

	function navigateToCheckout() {
		navigate(`/${slug}/checkout`);
	}

	return { cartItemsCount, navigateToCheckout };
};
