import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

instance.defaults.headers.common['Accept'] = 'application/json'

export default instance
