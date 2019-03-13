import { setCookieStorage } from '@/utils/cookieStorage'
import { request } from '@/api/request'
const login = {
  state: {
    users: ''
  },
  mutations: {
    GET_USERS: (state, data) => {
      state.users = data  
    }
  },
  actions: {
    loginUser ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_USERS', res)
          setCookieStorage('username', data.name)
          resolve()
        })
          .catch(
            error => {
              reject(error)
            })
      })  
    }
  }
}
export default login 
