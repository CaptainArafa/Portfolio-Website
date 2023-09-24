import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfth14VVtCAp-yhEW4yfU5gCQwl_HORl8",
  authDomain: "portfolio-6a9e1.firebaseapp.com",
  projectId: "portfolio-6a9e1",
  storageBucket: "portfolio-6a9e1.appspot.com",
  messagingSenderId: "735468902868",
  appId: "1:735468902868:web:b617a6fb6211c8ffb79e41",
  measurementId: "G-GGDP39VQH2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)