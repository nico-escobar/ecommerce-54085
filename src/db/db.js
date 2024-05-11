import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDZXDAhufkv-F1zS45LdTDYsa4GIPB0upU",
    authDomain: "ecommerce-54085-2cc7d.firebaseapp.com",
    projectId: "ecommerce-54085-2cc7d",
    storageBucket: "ecommerce-54085-2cc7d.appspot.com",
    messagingSenderId: "776159411066",
    appId: "1:776159411066:web:df8d5c7c9918dd9f57b4c3"
};


initializeApp(firebaseConfig);


const db = getFirestore()

export default db