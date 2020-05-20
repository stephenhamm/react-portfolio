import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCGABF78RyVdRbWzgAsiReubMBHNUyI5c4",
  authDomain: "react-portfolio-bfcde.firebaseapp.com",
  databaseURL: "https://react-portfolio-bfcde.firebaseio.com",
  projectId: "react-portfolio-bfcde",
  storageBucket: "react-portfolio-bfcde.appspot.com",
  messagingSenderId: "34085270557",
  appId: "1:34085270557:web:417658b2d1b4e9a41902f4",
  measurementId: "G-5YKN8XLL2K"
};

firebase.initializeApp(config);

export default firebase;
