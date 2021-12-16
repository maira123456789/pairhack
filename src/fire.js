import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfzBIvC85gJmLnIFtAY4cOuRs10YMyU7U",
  authDomain: "pair-hack.firebaseapp.com",
  projectId: "pair-hack",
  storageBucket: "pair-hack.appspot.com",
  messagingSenderId: "491693904665",
  appId: "1:491693904665:web:ea1f90e7b6faa523132b88",
};
const fire = firebase.initializeApp(firebaseConfig);

export const aut = getAuth(fire);
export default fire;
