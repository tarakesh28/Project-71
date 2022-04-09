import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBjumKeY4KnTHeJJ04U5mbScweWUAU-n2M",
  authDomain: "e-ride-app-e41be.firebaseapp.com",
  projectId: "e-ride-app-e41be",
  storageBucket: "e-ride-app-e41be.appspot.com",
  messagingSenderId: "820965995943",
  appId: "1:820965995943:web:94729c78ad699ba2573282"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
