// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_cbb33MZSzZSO5j_YB84k_UyXH0Nagw0",
  authDomain: "clone-project-1-819a5.firebaseapp.com",
  projectId: "clone-project-1-819a5",
  storageBucket: "clone-project-1-819a5.firebasestorage.app",
  messagingSenderId: "30498241574",
  appId: "1:30498241574:web:61b56d5b0c0ece79a07ae7",
  measurementId: "G-K39PTT2LXL"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }