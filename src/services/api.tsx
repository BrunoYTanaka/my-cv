import axios from 'axios'

const api = axios.create({
  baseURL: 'https://6241cafb9ba1585b3400ffce.mockapi.io/api/v1/config',
})

export default api
