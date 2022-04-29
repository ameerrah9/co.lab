// Create a module and store firebase config object

// Import getDatabase function
import { getDatabase } from 'firebase/database';

// Import initializeApp function to configure and initialize firebase app
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8nWmT5Z-d5bHvlIBo_ypXfIz9V8P18ZY",
    authDomain: "take-care-general.firebaseapp.com",
    databaseURL: "https://take-care-general-default-rtdb.firebaseio.com",
    projectId: "take-care-general",
    storageBucket: "take-care-general.appspot.com",
    messagingSenderId: "900933982078",
    appId: "1:900933982078:web:3e5c714bdd643f9531852f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Storing firebase database in a variable for easier access
const realtime = getDatabase(app);

// Exporting realtime function to access in App.js
export default realtime;