import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz-wzFFLKQsgYxskfUuDbTqqo6_TMwIVk",
    authDomain: "ferociousbaxx.firebaseapp.com",
    projectId: "ferociousbaxx",
    storageBucket: "ferociousbaxx.appspot.com",
    messagingSenderId: "362633569704",
    appId: "1:362633569704:web:f00a9a506c8ba6377ee99d"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;