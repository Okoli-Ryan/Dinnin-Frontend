import * as PusherPushNotifications from "@pusher/push-notifications-web";

const beamsClient = new PusherPushNotifications.Client({
	instanceId: import.meta.env.VITE_BEAM_INSTANCE_ID,
});

function initiatePushNotification() {
	beamsClient
		.start()
		.then((payload) => console.log(payload))
		.then(() => beamsClient.addDeviceInterest("hello"))
		.then(() => console.log("Successfully registered and subscribed!"))
		.catch(console.error);
}

export { initiatePushNotification, beamsClient };
