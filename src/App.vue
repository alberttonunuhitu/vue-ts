<template>
  <div id="app">
    <Header />

    <b-container fluid>
      <router-view />
    </b-container>

    <b-overlay :show="isloading" v-model="opacity" :blur="blur" no-wrap>
      <template v-slot:overlay>
        <div class="text-center">
          <b-spinner style="width: 3rem; height: 3rem;" />
          <p class="mt-3">Loading...</p>
        </div>
      </template>
    </b-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BOverlay, BSpinner } from "bootstrap-vue";
import { Header } from "@/components";

@Component({
  components: {
    Header,
    BOverlay,
    BSpinner
  }
})
export default class App extends Vue {
  private opacity = 0.8;
  private blur = "";

  get isloading() {
    return this.$store.state.loading;
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

#app {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
