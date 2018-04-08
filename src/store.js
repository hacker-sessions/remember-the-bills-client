import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from '@/axios-auth'

// let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
// axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    success: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setSuccess (state, payload) {
      state.success = payload
    },
    clearAlert (state) {
      state.error = null
      state.success = null
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearAlert')

      axios.post('/api/v1/auth', {
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.passwordConfirmation,
        confirm_success_url: 'http://localhost:8080/signin'
      }).then(user => {
        commit('setLoading', false)
        commit('setSuccess', {message: `Please check your email: ${user.data.data.email}`})
      }).catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearAlert')
      axios.post('/api/v1/auth/sign_in', {
        email: payload.email,
        password: payload.password
      }
      ).then(user => {
        commit('setLoading', false)
        commit('setUser', {
          email: user.data.data.email
        })
      }).catch(
        error => {
          commit('setLoading', false)
          commit('setError', error.response.statusText)
          console.log(error)
        }
      )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: [], fbkeys: {}})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearAlert ({commit}) {
      commit('clearAlert')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    success (state) {
      return state.success
    }
  }
})
