import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyBbkCPdB8eWBrTkPGqHtvv_t4qC_f5JWEg",
    authDomain: "yalo-hackaton.firebaseapp.com",
    databaseURL: "https://yalo-hackaton.firebaseio.com",
    projectId: "yalo-hackaton",
    storageBucket: "yalo-hackaton.appspot.com",
    messagingSenderId: "928604966533",
    appId: "1:928604966533:web:af8738d9023b9f393963ec"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }; 