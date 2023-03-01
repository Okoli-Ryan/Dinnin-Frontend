importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
// importScripts('/__/firebase/init.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
	messagingSenderId:
		"BJ0yVbCUYhzo6b-dGoJZmQKI-5eBX56x5G0YdKvw9VyCOEdxyQYkqMSidenFftkV-u20WKQlldXpwUs2IE6c4wM",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
firebase.messaging();
