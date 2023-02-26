import { useNavigate, useParams } from "react-router-dom";

export const useOrderSuccess = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	const navigateToMenu = () => {
		navigate(`/${slug}/menu`);
	};

	return { navigateToMenu };
};
