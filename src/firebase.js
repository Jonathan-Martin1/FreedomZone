import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbZDKMx_hjUkrazgMZvElzCKOPPDtGeAo',
  authDomain: 'freedom-zone-d23ed.firebaseapp.com',
  projectId: 'freedom-zone-d23ed',
  storageBucket: 'freedom-zone-d23ed.appspot.com',
  messagingSenderId: '247452240008',
  appId: '1:247452240008:web:150e57eccc4c108ac1773d',
  measurementId: 'G-Q6BV8C8P48',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
