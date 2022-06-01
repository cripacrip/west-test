import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3WR5aTeV_RnrNHpo3p7oSHwLHngP4gXI",
  authDomain: "west-test-1c1bd.firebaseapp.com",
  projectId: "west-test-1c1bd",
  storageBucket: "west-test-1c1bd.appspot.com",
  messagingSenderId: "714155075640",
  appId: "1:714155075640:web:8748c8e4d740ad63e89ecd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
