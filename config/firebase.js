import firebase from 'firebase';
import 'firebase/firestore';

/**
 * firebase configuration
 */
const firebaseConfig = {
  apiKey: "AIzaSyBPi0tBsh2fgIEuVW1VuMjOhoM-98gRNwE",
  authDomain: "genso-4771b.firebaseapp.com",
  databaseURL: "https://genso-4771b.firebaseio.com",
  projectId: "genso-4771b",
  storageBucket: "genso-4771b.appspot.com",
  messagingSenderId: "39321214688",
  appId: "1:39321214688:web:41cb131fd03f89d668ba85"
}

console.log(`initializing firebase app: ${firebaseConfig.projectId}`);
firebase.initializeApp(firebaseConfig);