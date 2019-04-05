import { request } from '@/api/request'
const stylebook = {
  state: {
    stylebook: ''
  },
  mutations: {
    GET_STYLEBOOK: (state, data) => {
      state.stylebook = data
    }
  },
  actions: {
    getstylebook ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_STYLEBOOK', res.data.data)
          resolve()
        })
          .catch(
            error => {
              reject(error)
            }
          )
      })
    },
    pushstylebook ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          resolve(res)
        })
          .catch(
            error => {
              reject(error)
            }
          )
      })
    }
  }}
export default stylebook 
