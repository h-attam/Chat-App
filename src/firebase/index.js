// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// auth kurulumu için importlar
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Da1rF43y0c-0zQhJnvOSnINO9yamMVU",
  authDomain: "chat-app-ebd39.firebaseapp.com",
  projectId: "chat-app-ebd39",
  storageBucket: "chat-app-ebd39.appspot.com",
  messagingSenderId: "710200235057",
  appId: "1:710200235057:web:a9883f6049d5918833f110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//kimlik doğrulama hizmetinin refernasını al
export const auth = getAuth(app);

//google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//veritbanının referansını al
export const db = getFirestore(app);