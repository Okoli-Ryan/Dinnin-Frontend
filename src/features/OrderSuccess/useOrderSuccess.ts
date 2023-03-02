import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { sendFirebaseToken } from "../../core/Utils";

export const useOrderSuccess = () => {
	const navigate = useNavigate();
	const [currToken, setCurrToken] = useState("");
	const { slug } = useParams();

	const navigateToMenu = () => {
		navigate(`/${slug}/menu`);
	};

	useEffect(() => {
		async function requestPermission() {
			const permission = await Notification.requestPermission();
			if (permission === "granted") {
				const token = await sendFirebaseToken();
				setCurrToken(token || "");
			} else console.log("Not granted");
		}

		requestPermission();
	}, []);

	return { navigateToMenu, currToken };
};
