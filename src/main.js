import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import * as firebase from 'firebase'
import Alert from './components/shared/Alert.vue'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import './style/loading.anim.css'
import axios from 'axios'
import vuetify from './plugins/vuetify';

axios.defaults.headers.common['Accept'] = 'application/json'

Vue.config.productionTip = false

Vue.component('app-alert', Alert)

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyC0SBugGCbJ6zTvHWH9Uogb0XeKbo31jgU",
      authDomain: "remember-the-bills-35eef.firebaseapp.com",
      databaseURL: "https://remember-the-bills-35eef.firebaseio.com",
      projectId: "remember-the-bills-35eef",
      storageBucket: "remember-the-bills-35eef.appspot.com",
      messagingSenderId: "980883720163",
      appId: "1:980883720163:web:43dbc865b18099ebb482d6"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
