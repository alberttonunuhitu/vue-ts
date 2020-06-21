import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "./firebase";
import {
  BButton,
  BCard,
  BCol,
  BContainer,
  BForm,
  BFormGroup,
  BFormInput,
  BRow
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.component("b-button", BButton);
Vue.component("b-card", BCard);
Vue.component("b-col", BCol);
Vue.component("b-container", BContainer);
Vue.component("b-form", BForm);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-input", BFormInput);

Vue.component("b-row", BRow);

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
