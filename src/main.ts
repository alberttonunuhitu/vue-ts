import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "./firebase";

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("user/setLoggedIn", true);
    store.commit("user/setUser", user);
    console.log("Login");
  } else {
    store.commit("user/setLoggedIn", false);
    store.commit("user/setUser", null);
    console.log("Logout");
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
