import { setsessionStorage } from '@/utils/sessionStorage'
import { request } from '@/api/home'
const home = {
  state: {
    pid: '',
    url: '',
    item: ''
  },
  mutations: {// 同步
    GET_ITEM: (state, data) => {
      state.item = data
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
            reject('错误:' + error)
          })
      }) 
    }
  }
}

export default home
