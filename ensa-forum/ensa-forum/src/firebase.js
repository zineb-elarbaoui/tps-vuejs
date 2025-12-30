import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyDuOSxuJ7oHLo-MCknN5k8gWQzxglm1Hh4",
  authDomain: "ensa-forum.firebaseapp.com",
  projectId: "ensa-forum",
  storageBucket: "ensa-forum.firebasestorage.app",
  messagingSenderId: "536937132290",
  appId: "1:536937132290:web:1a45e8881f96c82d25921b",
  measurementId: "G-BNYQD70BR0"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export function onUserStateChanged(cb) {
  return onAuthStateChanged(auth, cb)
}

