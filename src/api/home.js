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
  const O = {}
  for (let i in data) {
    if (i !== 'url') {
      O[i] = data[i]
    } 
  }
  return axios.post(data.url, qs.stringify(O))
}
export function requestArticle (data) {
  return axios.post(data.url, qs.stringify({content: data.content}))
}
export function responseArticle (data) {
  return axios.post(data.url, qs.stringify({id: data.id}))
}
