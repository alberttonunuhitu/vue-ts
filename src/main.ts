import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "./firebase";

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit(`user/SET_LOGGED_IN`, true);
    store.commit(`user/SET_USER`, user);
  } else {
    store.commit(`user/SET_LOGGED_IN`, false);
    store.commit(`user/SET_USER`, null);
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
