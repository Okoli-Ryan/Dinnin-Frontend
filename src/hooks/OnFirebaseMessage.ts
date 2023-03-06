import { onMessage } from "firebase/messaging";
import { useEffect } from "react";

import { messaging } from "../core/Firebase";

export const onFirebaseMessage = () => {
	useEffect(() => {
		onMessage(messaging, (payload) => {
			console.log(payload);
		});
	}, []);

	return null;
};
