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
      .then(() => {
        this.loading = false;
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage: string;

        switch (errorCode) {
          case "auth/email-already-in-use":
            errorMessage = "Alamat email anda sudah terdaftar.";
            break;
          case "auth/invalid-email":
            errorMessage = "Alamat email tidak valid.";
            break;
          case "auth/operation-not-allowed":
            errorMessage =
              "Operasi dengan alamat email dan kata sandi tidak di ijinkan.";
            break;
          case "auth/weak-password":
            errorMessage = "Kata sandi harus lebih dari 6 karakter.";
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
