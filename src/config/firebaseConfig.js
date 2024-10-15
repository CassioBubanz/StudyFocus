import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDqup0oL9qT7bohQYQlzEEnT_lGJFI7SDg",
    authDomain: "study-focus-a9430.firebaseapp.com",
    projectId: "study-focus-a9430",
    storageBucket: "study-focus-a9430.appspot.com",
    messagingSenderId: "530043967920",
    appId: "1:530043967920:web:01895314f0728a59dede75",
    measurementId: "G-WFF55S6D56"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);