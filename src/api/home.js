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
 
export function request (data) {
  return axios.post(data.url, qs.stringify({
    pid: data.pid}))
}
export function requestUser (data) {
  return axios.post(data.url, qs.stringify({name: data.name, password: data.password}))
}
export function requestArticle (data) {
  return axios.post(data.url, qs.stringify({content: data.content}))
}
export function responseArticle (data) {
  return axios.post(data.url, qs.stringify({id: data.id}))
}
