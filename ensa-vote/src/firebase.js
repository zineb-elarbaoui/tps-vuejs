// Firebase setup for Auth + Firestore + Hosting
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo_exWzKN5rJnNNgqZ3q5-wzAJbH0HRa8",
  authDomain: "ensa-vote-zineb-elarbaoui.firebaseapp.com",
  projectId: "ensa-vote-zineb-elarbaoui",
  storageBucket: "ensa-vote-zineb-elarbaoui.appspot.com",
  messagingSenderId: "834172167398",
  appId: "1:834172167398:web:03d0b40addf5a930544727"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export function onUserStateChanged(callback) {
  return onAuthStateChanged(auth, callback);
}
