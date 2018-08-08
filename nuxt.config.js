module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['j-toker']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Routes
  */
  router: {
    middleware: ['auth']
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/auth'
  ],
  /*
  ** Modules Configurations
  */
  axios: {
    host: '0.0.0.0',
    port: 3000,
    prefix: '/api/v1',
    init (axios, ctx) {
      axios.defaults.headers.common['Accept'] = 'application/json'
    }
  },
  auth: {
    plugins: [ '~/plugins/auth.js' ],
    redirect: {
      login: '/account/signin',
      logout: '/',
      user: '/account'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/sign_in', method: 'post', propertyName: 'access-token' },
          logout: { url: 'auth/sign_out', method: 'delete' },
          user: { url: '/auth/validate_token', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  }
}
