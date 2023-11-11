import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda--ecommerce.firebaseapp.com",
  projectId: "tienda--ecommerce",
  storageBucket: "tienda--ecommerce.appspot.com",
  messagingSenderId: "425145767277",
  appId: "1:425145767277:web:1955c263a1d237a3ac3664",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//AIzaSyAKusZgrrK6z6IGZZKgsjCTw3yiKHDAIjM
