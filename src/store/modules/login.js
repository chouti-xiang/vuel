import { setsessionStorage } from '@/utils/sessionStorage'
import { requestUser } from '@/api/home'
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
        requestUser(data).then(res => {
          commit('GET_USERS', res)
          setsessionStorage('username', data.name)
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
