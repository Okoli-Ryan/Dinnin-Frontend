import { getMessaging, onMessage } from "firebase/messaging";
import { useEffect } from "react";

export const onFirebaseMessage = () => {
	const messaging = getMessaging();

	useEffect(() => {
		onMessage(messaging, (payload) => {
			console.log(payload);
		});
	}, []);

	return null;
};
