import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { initiatePushNotification } from "../../services/PushNotification";

export const useOrderSuccess = () => {
	const navigate = useNavigate();
	const [currToken, setCurrToken] = useState("");
	const { slug } = useParams();

	initiatePushNotification();

	const navigateToMenu = () => {
		navigate(`/${slug}/menu`);
	};

	// useEffect(() => {
	// 	async function requestPermission() {
	// 		const permission = await Notification.requestPermission();
	// 		if (permission === "granted") {
	// 			const token = await sendFirebaseToken();
	// 			setCurrToken(token || "");
	// 		} else console.log("Not granted");
	// 	}

	// 	requestPermission();
	// }, []);

	return { navigateToMenu, currToken };
};
