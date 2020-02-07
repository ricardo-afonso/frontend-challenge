import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://www.mocky.io/v2/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTranscriptions() {
    return apiClient.get('/5ae1c5792d00004d009d7e5c')
  },
  postTranscriptions(data) {
    return apiClient.post('/5ae1c5792d00004d009d7e5c', data)
  }
}
