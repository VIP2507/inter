import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnP11PDZXIeqCoFHZwgBn-3SBY38lqukw",
    authDomain: "interview-task-4455b.firebaseapp.com",
    projectId: "interview-task-4455b",
    storageBucket: "interview-task-4455b.appspot.com",
    messagingSenderId: "807570717894",
    appId: "1:807570717894:web:ff31a76c3f236dec03ebc7",
    measurementId: "G-H6T6KMJEZ6"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire