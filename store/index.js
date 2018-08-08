import Vuex from 'vuex'

// const config = {
//   headers: {
//     'content-type': 'application/json'
//   }
// }

const createStore = () => {
  return new Vuex.Store({
    state: {
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
      signUserUp ({
        commit
      }, payload) {
        commit('setLoading', true)
        commit('clearAlert')

        // this.$auth.loginWith('local', {
        //   email: payload.email,
        //   password: payload.password,
        //   password_confirmation: payload.passwordConfirmation
        // })

        this.$axios.$post('/auth', {
          email: payload.email,
          password: payload.password,
          password_confirmation: payload.passwordConfirmation,
          confirm_success_url: 'http://localhost:8080/account/signin'
        })
        .then(user => {
          commit('setLoading', false)
          commit('setSuccess', {
            message: `Please check your email: ${user.data.email}`
          })
        }).catch(error => {
          commit('setLoading', false)
          commit('setError', error.response.data.errors.full_messages[0] || error.response.statusText || error.message)
          console.log(error)
        })
      },
      signUserIn ({
          commit
        }, payload) {
        commit('setLoading', true)
        commit('clearAlert')

        this.$auth.loginWith('local', { data: {
          email: payload.email,
          password: payload.password}
        }).then(user => {
          commit('setLoading', false)
          console.log('Logged in')
          this.app.router.push('/account')
        }).catch(
          error => {
            commit('setLoading', false)
            commit('setError', error.message || error.response.statusText)
            console.log(error)
          }
        )
      },
      async logout ({
        commit
      }) {
        await this.$auth.logout()
      },
      clearAlert ({
        commit
      }) {
        commit('clearAlert')
      },
      setSuccessMessage ({
        commit
      }, payload) {
        commit('setSuccess', payload)
      },
      updateAccount ({commit}, payload) {
        // udpate account
      }
    },
    getters: {
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
}

export default createStore
