// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0BmTxoGwAvjsx6PW_v6wLm0v1wuMaobw",
  authDomain: "assignment-c5a43.firebaseapp.com",
  projectId: "assignment-c5a43",
  storageBucket: "assignment-c5a43.appspot.com",
  messagingSenderId: "51358043757",
  appId: "1:51358043757:web:fe38affd4bae57b3867964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;