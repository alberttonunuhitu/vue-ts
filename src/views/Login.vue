<template>
  <b-row class="justify-content-md-center mt-5">
    <b-col cols="12" md="4">
      <b-card bg-variant="light" text-variant="dark">
        <h4 class="text-center">Masuk ke akun kamu</h4>
        <hr />
        <b-form>
          <b-form-group>
            <b-form-input
              type="email"
              placeholder="Masukan alamat email"
              v-model="email"
              required
            />
          </b-form-group>

          <b-form-group>
            <b-form-input
              type="password"
              placeholder="Masukkan kata sandi"
              v-model="password"
              required
            />
          </b-form-group>

          <b-row v-show="isError" class="my-2 text-danger">
            <b-col>
              <small>
                {{ errorMessage }}
              </small>
            </b-col>
          </b-row>

          <b-button type="button" variant="primary" block @click="login">
            Masuk
          </b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "@/firebase";

@Component
export default class Login extends Vue {
  private email = "";
  private password = "";
  private isError = false;
  private errorMessage = "";

  private login(): void {
    this.$store.commit("SET_LOADING", true);

    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.isError = false;
        this.errorMessage = "";
        this.$store.commit("SET_LOADING", false);
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

        this.$store.commit("SET_LOADING", false);
        this.isError = true;
        this.errorMessage = errorMessage;
      });
  }
}
</script>
