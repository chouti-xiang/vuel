import { setsessionStorage } from '@/utils/sessionStorage'
import { request } from '@/api/request'
const home = {
  state: {
    pid: '',
    url: '',
    item: '',
    contents: ''
  },
  mutations: {// 同步
    GET_ITEM: (state, data) => {
      state.item = data
    },
    GET_CONTENT: (state, data) => {
      state.contents = data
    }
  },
  actions: {// 异步
    get_qqtj ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_ITEM', res.data.data)
          setsessionStorage('get_item', JSON.stringify(data))
          resolve()
        })
          .catch(error => {
            reject(error)
          })
      }) 
    },
    up_thumb ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          resolve()
        })
          .catch(error => {
            reject(error)
          })
      }) 
    },
    getcontent ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_CONTENT', res.data.data)
          resolve()
        })
          .catch(error => {
            reject(error)
          })
      }) 
    }
  }
}

export default home
