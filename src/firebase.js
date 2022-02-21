import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYKUv5KDWj1LUyv6rQol9dl4x0xDMVJNI",
  authDomain: "sonsoles-shop.firebaseapp.com",
  projectId: "sonsoles-shop",
  storageBucket: "sonsoles-shop.appspot.com",
  messagingSenderId: "617297253935",
  appId: "1:617297253935:web:33a628bed4bfe44c27d8da"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);