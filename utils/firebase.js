import { initializeApp, getApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FRKEY,
  authDomain: process.env.NEXT_PUBLIC_FRDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FRPID,
  storageBucket: process.env.NEXT_PUBLIC_FRSTORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_FRMID,
  appId: process.env.NEXT_PUBLIC_AID,
  measurementId: process.env.NEXT_PUBLIC_MID
};

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  app = getApp();
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export { auth, googleProvider, fbProvider };