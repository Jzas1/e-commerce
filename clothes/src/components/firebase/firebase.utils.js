import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = 
{
    apiKey: "AIzaSyCn3KwMGz5Hsgx4x3W8g8wYeRu9O_kJ0Ns",
    authDomain: "e-com-81f38.firebaseapp.com",
    databaseURL: "https://e-com-81f38.firebaseio.com",
    projectId: "e-com-81f38",
    storageBucket: "e-com-81f38.appspot.com",
    messagingSenderId: "122851371621",
    appId: "1:122851371621:web:eb47f5f88283d19aecb48c",
    measurementId: "G-7QHNEFHBBF"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;