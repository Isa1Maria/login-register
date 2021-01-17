import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAl5AAte7Pp9tWwHh_0UG0I1ouHgZCubnU",
    authDomain: "fulguritchallenge.firebaseapp.com",
    projectId: "fulguritchallenge",
    storageBucket: "fulguritchallenge.appspot.com",
    messagingSenderId: "40595159459",
    appId: "1:40595159459:web:b7a610deae766f62630216"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;