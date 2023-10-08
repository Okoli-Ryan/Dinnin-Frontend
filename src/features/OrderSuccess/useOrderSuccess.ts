import { useNavigate, useParams } from 'react-router-dom';

import { initiatePushNotification } from '../../services/PushNotification';
import { useAppSelector } from "../../store";

export const useOrderSuccess = () => {
	const navigate = useNavigate();
	const { code: tableCode } = useAppSelector((state) => state.table);
	const { slug } = useParams();

	initiatePushNotification();

	const navigateToMenu = () => {
		//TODO handle user choosing table if table code is absent

		const homeRoute = `/${slug}?code=${tableCode}`;
		navigate(homeRoute);
	};

	return { navigateToMenu };
};
