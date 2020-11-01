import firebase from 'firebase/app'
import 'firebase/firestore'

export default firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
})

export const { serverTimestamp } = firebase.firestore.FieldValue
export const increment = firebase.firestore.FieldValue.increment(1)
export const db = firebase.firestore()

if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080)
}
