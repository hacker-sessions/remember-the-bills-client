export default function ({
  $axios,
  redirect
}) {
  // $axios.onRequest(config => {
  //   console.log('Making request to ' + config.url)
  //   config.headers.client = window.localStorage.getItem('client')
  //   config.headers['access-token'] = window.localStorage.getItem('access-token')
  //   config.headers.uid = window.localStorage.getItem('uid')
  //   config.headers['token-type'] = window.localStorage.getItem('token-type')

  //   return config
  //   // config.defaults.headers.common['Accept'] = 'application/json'
  //   // if (store.state.authToken) {
  //   //   config.headers.common['Authorization'] = store.state.authToken
  //   // }
  // })

  // $axios.onResponse(response => {
  //   // Set user headers only if they are not blank.
  //   // If DTA gets a lot of request quickly, it won't return headers for some requests
  //   // so you need a way to keep headers in localStorage to gettting set to undefined
  //   if (response.headers.client) {
  //     localStorage.setItem('access-token', response.headers['access-token'])
  //     localStorage.setItem('client', response.headers.client)
  //     localStorage.setItem('uid', response.headers.uid)
  //     localStorage.setItem('token-type', response.headers['token-type'])
  //   }
  //   // You have to return the response here or you won't have access to it
  //   // later
  //   return response
  // })
}
