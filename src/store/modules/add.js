import { request } from '@/api/request'
const add = {
  state: {
    categray: ''
  },
  mutations: {
    GET_CATEGRAY: (state, data) => {
      state.categray = data
    }
  },
  actions: {
    addArticle ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          resolve(res)
        })
          .catch(
            error => {
              reject(error)
            })
      })  
    },
    getCategray ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_CATEGRAY', res.data.data)
          resolve()
        })
          .catch(
            error => {
              reject(error)
            }
          )
      })
    }
  }
}
export default add 
