import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return error.response
  },
)

export default instance
