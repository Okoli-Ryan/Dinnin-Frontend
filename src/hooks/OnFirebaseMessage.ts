import { message } from "antd";
import { useEffect } from "react";

import { onMessageListener } from "../core/Firebase";

export const onFirebaseMessage = () => {
	useEffect(() => {
		onMessageListener()
			.then((payload) => {
				message.success("Got notification");
				//   setNotification({title: payload?.notification?.title, body: payload?.notification?.body});
			})
			.catch((err) => console.log("failed: ", err));
	}, []);

	return null;
};
