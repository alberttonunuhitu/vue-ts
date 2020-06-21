<template>
  <div>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Kata Sandi" v-model="password" />
      <button type="button" @click="login">Masuk</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "@/firebase";

@Component
export default class Login extends Vue {
  private email = "";
  private password = "";
  private loading = false;

  private login(): void {
    this.loading = true;
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.loading = false;
        this.$router.replace({ name: "Home" });
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage: string;

        switch (errorCode) {
          case "auth/invalid-email":
            errorMessage = "Alamat email tidak valid.";
            break;
          case "auth/user-disabled":
            errorMessage =
              "Akun anda telah di nonaktifkan. Silahkan menghubunggi admin untuk info lebih lanjut.";
            break;
          case "auth/user-not-found":
            errorMessage = "Alamat email tidak terdaftar.";
            break;
          case "auth/wrong-password":
            errorMessage = "Alamat email atau kata sandi anda salah.";
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
