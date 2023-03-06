import { getToken } from "firebase/messaging";
import { decode } from "html-entities";

import { messaging } from "./Firebase";

export const parseCurrency = (amount: number) => `${decode("&#8358;")} ${amount}`;

export async function sendFirebaseToken() {
	const VAPID_KEY = import.meta.env.VITE_VAPID_KEY;

	try {
		const currentToken = await getToken(messaging, { vapidKey: VAPID_KEY });
		if (currentToken) {
			// Send the token to your server and update the UI if necessary
			// ...

			return currentToken;
		} else {
			// Show permission request UI
			console.log("No registration token available. Request permission to generate one.");
			// ...
		}
	} catch (err) {
		console.log("An error occurred while retrieving token. ", err);
		// ...
	}
}
