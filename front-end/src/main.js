import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCutjeqMdfUO3_peJwUxZjE5Z2pyR2ZNAA",
  authDomain: "project-eas-8b072.firebaseapp.com",
  projectId: "project-eas-8b072",
  storageBucket: "project-eas-8b072.appspot.com",
  messagingSenderId: "678072564929",
  appId: "1:678072564929:web:fc1b2f47f5394c5209a840"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
