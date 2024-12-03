// src/firebase.js

// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Auth service
const auth = getAuth(firebaseApp);

// Export auth to use in other parts of your app
export { auth };
