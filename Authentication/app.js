import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpJtwtujHE__np4Gjn3myaTEGOm4-U214",
  authDomain: "auth-test-a7bec.firebaseapp.com",
  projectId: "auth-test-a7bec",
  storageBucket: "auth-test-a7bec.appspot.com",
  messagingSenderId: "932496717264",
  appId: "1:932496717264:web:501794417fd5b770a735d5"
};

const app = initializeApp(firebaseConfig);


let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let registerEmail = document.getElementById('registerEmail');
let registerPassword = document.getElementById('registerPassword');

