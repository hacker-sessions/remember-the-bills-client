export default function ({ $auth }) {
  if ($auth) {
    $auth.onError((error, name, endpoint) => {
      console.error(name, error)
    })

    if (!$auth.loggedIn) {
      console.log('Anounymous')
      return
    }

    const username = this.$store.state.auth.user
    console.log('Username: ' + username)
  }

  console.log('$auth is null')
}
