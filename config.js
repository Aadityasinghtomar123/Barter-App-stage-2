import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBs7wF7ckcIT1b3GuEbDB7s_6RACcck1lI",
    authDomain: "barter-app-4bbcf.firebaseapp.com",
    databaseURL: "https://barter-app-4bbcf.firebaseio.com",
    projectId: "barter-app-4bbcf",
    storageBucket: "barter-app-4bbcf.appspot.com",
    messagingSenderId: "169118376494",
    appId: "1:169118376494:web:3613365817bb524a7775bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();