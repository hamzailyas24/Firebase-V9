import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpJtwtujHE__np4Gjn3myaTEGOm4-U214",
  authDomain: "auth-test-a7bec.firebaseapp.com",
  projectId: "auth-test-a7bec",
  storageBucket: "auth-test-a7bec.appspot.com",
  messagingSenderId: "932496717264",
  appId: "1:932496717264:web:501794417fd5b770a735d5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {
  let registerEmail = document.getElementById("registerEmail").value;
  let registerPassword = document.getElementById("registerPassword").value;
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user ==>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error ==>", errorMessage);
    });
});

let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user ==>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error ==>", errorMessage);
    });
});
