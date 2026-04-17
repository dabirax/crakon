import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABXK8ro4x7EBJId4zOi9RIAq24mKXea9A",
  authDomain: "mymoney-finance-17667.firebaseapp.com",
  projectId: "mymoney-finance-17667",
  storageBucket: "mymoney-finance-17667.firebasestorage.app",
  messagingSenderId: "957931657039",
  appId: "1:957931657039:web:1cc3b59c21e1d728fd573a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

export { projectFirestore, projectAuth };