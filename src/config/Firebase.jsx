import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
 import { getDatabase } from "firebase/database";
 import {getStorage} from "firebase/storage"
 

 const firebaseConfig = {
    apiKey: "AIzaSyAjQMPbZQHZ0CvaxR41IUTEFfim--2zC-s",
    authDomain: "olx-clone-62c25.firebaseapp.com",
    databaseURL: "https://olx-clone-62c25-default-rtdb.firebaseio.com",
    projectId: "olx-clone-62c25",
    storageBucket: "olx-clone-62c25.appspot.com",
    messagingSenderId: "967509187632",
    appId: "1:967509187632:web:5d8d3616cfb3fba1e521f5",
    measurementId: "G-Q57NC21Z67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
const db =getDatabase(app)
const storage =getStorage(app)
export {auth,db,storage}