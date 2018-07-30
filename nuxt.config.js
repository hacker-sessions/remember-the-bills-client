module.exports = {
  /*
  ** Build configuration
  */
  build: {},
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
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  plugins: [
    '~/plugins/axios'
  ],
  axios: {
    host: '0.0.0.0',
    port: 3000,
    prefix: '/api/v1',
    init (axios, ctx) {
      axios.defaults.headers.common['Accept'] = 'application/json'
    }
  },
  auth: {
    redirect: {
      login: '/signin',
      logout: '/',
      user: '/'
    }
  }
}
