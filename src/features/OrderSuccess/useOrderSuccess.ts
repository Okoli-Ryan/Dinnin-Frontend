import { useNavigate, useParams } from 'react-router-dom';

import { initiatePushNotification } from '../../services/PushNotification';

export const useOrderSuccess = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	initiatePushNotification();

	const navigateToMenu = () => {
		navigate(`/${slug}`);
	};

	return { navigateToMenu };
};
