<template>
  <b-row class="justify-content-md-center mt-5">
    <b-col cols="12" md="4">
      <b-card bg-variant="light" text-variant="dark">
        <h4 class="text-center">Daftar akun baru</h4>
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

          <b-button type="button" variant="primary" block @click="register">
            Daftar
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
export default class Register extends Vue {
  private email = "";
  private password = "";
  private isError = false;
  private errorMessage = "";

  private register(): void {
    this.$store.commit("SET_LOADING", true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
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

        this.$store.commit("SET_LOADING", false);
        this.isError = true;
        this.errorMessage = errorMessage;
      });
  }
}
</script>
