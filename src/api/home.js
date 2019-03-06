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
 
export function request(data){
  return axios.post(data.url, qs.stringify({
         pid: data.pid}))
}
