import axios from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}
const axiosInstance = axios.create(defaultConfig)
// 请求拦截
axiosInstance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截
axiosInstance.interceptors.response.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 封装请求
// get
function httpRequestGet (url, params) {
  return axiosInstance.get(url, params).then(res => res.data).catch()
}
// post
function httpRequestPost (url, params) {
  return axiosInstance.get(url, params).then(res => res.data).catch()
}

export default {
  httpRequestGet,
  httpRequestPost
}
