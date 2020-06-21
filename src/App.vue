<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <div v-if="isLoggedIn">
        <p>{{ displayName }}</p>
        |
        <a href="javascript:void(0)" @click="signOut">Keluar</a>
      </div>
      <div v-else>
        <router-link to="/daftar">Daftar</router-link>
        |
        <router-link to="/login">Login</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "@/firebase";

@Component
export default class App extends Vue {
  get isLoggedIn(): boolean {
    return this.$store.getters["user/isLoggedIn"];
  }

  get displayName(): string {
    return this.$store.getters["user/displayName"];
  }

  async signOut() {
    await firebase.auth().signOut();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
