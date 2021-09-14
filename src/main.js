import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

library.add(faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const configOptions = {
  apiKey: "AIzaSyD2XZGQnge48oLnbtYVYvYikQWbbIgDUr0",
  authDomain: "golf-f56a7.firebaseapp.com",
  projectId: "golf-f56a7",
  storageBucket: "golf-f56a7.appspot.com",
  messagingSenderId: "1731750651",
  appId: "1:1731750651:web:8bc1bc061545881a945e5e",
  measurementId: "G-K55M36M1RJ",
};

const firebaseApp = firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


export const db = firebaseApp.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
