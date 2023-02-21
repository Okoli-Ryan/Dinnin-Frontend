import { useNavigate, useParams } from "react-router-dom";

export const useCartModal = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	function navigateToCheckout() {
		navigate(`/${slug}/checkout`);
	}

	return { navigateToCheckout };
};
