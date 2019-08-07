import { request } from '@/api/request'
const add = {
  state: {
    categray: '',
    imageList: ''
  },
  mutations: {
    GET_CATEGRAY: (state, data) => {
      state.categray = data
    },
    GET_LIST_IMAGE: (state, data) => {
      state.imageList = data
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
    },
    addCore ({commit}, data) {
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
    getListImage ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_LIST_IMAGE', res.data.data)
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
