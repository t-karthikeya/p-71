import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCgfDvIHBD_Aeh9mYI8FIhEppdXZ5eBVPg",
 authDomain: "c-71-c5523.firebaseapp.com",
 projectId: "c-71-c5523",
 storageBucket: "c-71-c5523.appspot.com",
 messagingSenderId: "93451625774",
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

