import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCxmmK1gSpEARhp0fCbxRJiUhhWT0bV7C8",
    authDomain: "portfolio-6d169.firebaseapp.com",
    projectId: "portfolio-6d169",
    storageBucket: "portfolio-6d169.appspot.com",
    messagingSenderId: "563018088531",
    appId: "1:563018088531:web:c7ee0483b16ae763be46a6",
    measurementId: "G-F3P4KZX4JS"
}
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };