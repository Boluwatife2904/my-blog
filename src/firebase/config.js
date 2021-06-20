import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDoXijdlOePzVilBqOrSGVEfvfahXSBfjI",
  authDomain: "vue-blog-7f602.firebaseapp.com",
  projectId: "vue-blog-7f602",
  storageBucket: "vue-blog-7f602.appspot.com",
  messagingSenderId: "679651550081",
  appId: "1:679651550081:web:0bb65a8e0c9f240a2abe80"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp }