import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import './assets/tailwind.css'

const firebaseConfig = {
    apiKey: "AIzaSyAMPRkDtNsYLdg3u2CzR_s_L61ec2GOPsk",
    authDomain: "terms-5f6d7.firebaseapp.com",
    projectId: "terms-5f6d7",
    storageBucket: "terms-5f6d7.appspot.com",
    messagingSenderId: "887587738733",
    appId: "1:887587738733:web:0d9ba1b0d072557ca29b64"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

createApp(App).use(router).mount('#app')

export default db;