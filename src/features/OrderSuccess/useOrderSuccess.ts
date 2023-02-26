import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { sendFirebaseToken } from "../../core/Utils";

export const useOrderSuccess = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	const navigateToMenu = () => {
		navigate(`/${slug}/menu`);
	};

	useEffect(() => {
		async function requestPermission() {
			const permission = await Notification.requestPermission();
			if (permission === "granted") {
				await sendFirebaseToken();
			} else console.log("Not granted");
		}

		requestPermission();
	}, []);

	return { navigateToMenu };
};
