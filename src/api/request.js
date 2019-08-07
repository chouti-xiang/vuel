/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import qs from 'qs'

// const home = {
//   request: (data)=>{
//   	  axios.post(data.url, qs.stringify({
//       pid: data.pid
//     }))
//   }
// }
// export default home
 
// export function request (data) {
//   return axios.post(data.url, qs.stringify({
//     pid: data.pid}))
// }
let http = axios.create()
http.interceptors.request.use(
  config => {
    // config.baseURL = '/api/'
    config.withCredentials = true
    config.timeout = 6000
    let token = '12dkldsjoiedkljs1'
    if (token) {
      config.headers = {
        'access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    if (config.url === 'refresh') {
      config.headers = {
        'refresh-token': '233209fdkjlkldf',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return config
  }, () => {
    return Promise.reject({
      code: 'req off',
      msg: '请求失败 ，请稍候重试'
    })
  })

http.interceptors.response.use(
  response => {
    if (!response.data.value && response.data.data.message === 'token invalid') {
      token = '12dkldsjoiedkljs'
    }
    return response
  },
  error => {
    if (error.message === 'Network Error') {
      return Promise.reject({
        code: 'online down',
        msg: '网络连接超时，请稍后重试！'
      })
    } else {
      return Promise.reject({
        code: 'sys off',
        msg: '系统错误 ，请稍候重试'
      })
    }
  }
)
export function request (data, method = 'post') {
  const O = O || {}
  data = data || {}
  for (let i in data) {
    if (i !== 'url') {
      O[i] = data[i]
    } 
  }
  if (method === 'post') {
    let config = {
      url: data.url,
      method: method,
      data: qs.stringify(O)
    }
    return http(config)
  } else {
    return axios.get(data.url, qs.stringify(O))
  }
}
