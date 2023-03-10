importScripts("https://js.pusher.com/beams/service-worker.js");

// window.navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
const beamsClient = new PusherPushNotifications.Client({
	instanceId: "79d39ba8-80ad-4c5c-aa41-b9cfda6d5d42",
	// serviceWorkerRegistration: serviceWorkerRegistration,
});
// });
