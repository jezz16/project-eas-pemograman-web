<template>
  <h1>Login Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="login">Login</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const errMsg = ref("");

const login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .then((data) => {
      console.log("Successfully Login!");
      console.log(auth.currentUser);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-disabled":
          errMsg.value = "User Disabled";
          break;
        case "auth/user-not-found":
          errMsg.value = "User Not Found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Wrong Password";
          break;
        default:
          errMsg.value = "Unknown Error";
      }
    });
};
</script>
