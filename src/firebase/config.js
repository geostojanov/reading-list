import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAonI_MkLNSjO15wXporUDjtBnS_jVyTI0",
  authDomain: "fb9-reading-list-39244.firebaseapp.com",
  projectId: "fb9-reading-list-39244",
  storageBucket: "fb9-reading-list-39244.appspot.com",
  messagingSenderId: "694150490961",
  appId: "1:694150490961:web:3143f62e1b72f43ac70170"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }