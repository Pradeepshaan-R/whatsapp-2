import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBItvGvLL0O-70mJONRwdYlQ9oAzPCKZ74",
  authDomain: "whatsapp-2-e9a29.firebaseapp.com",
  projectId: "whatsapp-2-e9a29",
  storageBucket: "whatsapp-2-e9a29.appspot.com",
  messagingSenderId: "238171767645",
  appId: "1:238171767645:web:ba47a021bfd44937619eb4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
