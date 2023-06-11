importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');
const firebaseConfig = {
  apiKey: "AIzaSyCvMNPktZwPggLwQt8OR8tIQi-yAmg_zpQ",
  authDomain: "grocery-85704.firebaseapp.com",
  projectId: "grocery-85704",
  storageBucket: "grocery-85704.appspot.com",
  messagingSenderId: "820020102436",
  appId: "1:820020102436:web:98fbff6bc14a132e5d9fb1",
  measurementId: "G-RXPXK70HFC"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    image: payload.data.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener('notificationclick', function(event) {
    const clickedNotification = event.notification;
    clickedNotification.close();
    event.waitUntil(
      clients.openWindow(payload.data.click_action)
    );
  });
});
