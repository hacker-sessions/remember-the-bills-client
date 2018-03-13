import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import Alert from './components/shared/Alert.vue'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import './style/loading.anim.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.component('app-alert', Alert)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzS45SGsyBLAlUssu9GJoLUB-mj97OfUo',
      authDomain: 'remember-the-bills.firebaseapp.com',
      databaseURL: 'https://remember-the-bills.firebaseio.com',
      projectId: 'remember-the-bills',
      storageBucket: 'remember-the-bills.appspot.com',
      messagingSenderId: '1018126444290'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
