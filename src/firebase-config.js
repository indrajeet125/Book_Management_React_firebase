import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUYQVprquCeqyF7fDlS_Zs5wAsJtGXgH0",
  authDomain: "react-curd-application-1fd86.firebaseapp.com",
  projectId: "react-curd-application-1fd86",
  storageBucket: "react-curd-application-1fd86.appspot.com",
  messagingSenderId: "864462551862",
  appId: "1:864462551862:web:2edde9d2987c31df385197",
  measurementId: "G-14KNTRQYD5"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
