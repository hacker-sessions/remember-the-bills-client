export default function ({
  $axios,
  redirect
}) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    // config.defaults.headers.common['Accept'] = 'application/json'
    // if (store.state.authToken) {
    //   config.headers.common['Authorization'] = store.state.authToken
    // }
  })
}
