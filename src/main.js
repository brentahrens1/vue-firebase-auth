import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' 
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAJRr-wJTMtsfIMF8O6IyeRVlwO5jn2-gc",
  authDomain: "test-7f3e1.firebaseapp.com",
  databaseURL: "https://test-7f3e1.firebaseio.com",
  projectId: "test-7f3e1",
  storageBucket: "test-7f3e1.appspot.com",
  messagingSenderId: "635728890645",
  appId: "1:635728890645:web:ecdbdf599e4e17f012371c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app 

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
