<template>
  <div>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Kata Sandi" v-model="password" />
      <button type="button" @click="registerNewUser">Daftar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "@/firebase";

@Component
export default class Register extends Vue {
  private email: string;
  private password: string;
  private loading: boolean;

  constructor() {
    super();
    this.email = "";
    this.password = "";
    this.loading = false;
  }

  private registerNewUser(): void {
    this.loading = true;
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(response => {
        this.loading = false;
        console.log(response.user);
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage: string;

        switch (errorCode) {
          case "auth/email-already-in-use":
            errorMessage =
              "Thrown if there already exists an account with the given email address.";
            break;
          case "auth/invalid-email":
            errorMessage = "Thrown if the email address is not valid.";
            break;
          case "auth/operation-not-allowed":
            errorMessage =
              "Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.";
            break;
          case "auth/weak-password":
            errorMessage = "Thrown if the password is not strong enough.";
            break;
          default:
            errorMessage = error.message;
        }

        this.loading = false;
        alert(errorMessage);
      });
  }
}
</script>
