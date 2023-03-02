import { useEffect } from "react";

import { onMessageListener } from "../core/Firebase";

export const onFirebaseMessage = () => {
	useEffect(() => {
		onMessageListener()
			.then((payload) => {
				console.log(payload);
				//   setNotification({title: payload?.notification?.title, body: payload?.notification?.body});
			})
			.catch((err) => console.log("failed: ", err));
	}, []);

	return null;
};
