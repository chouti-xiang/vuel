import { request } from '@/api/request'
const article = {
  state: {
    article: ''
  },
  mutations: {
    GET_ARTICLE: (state, data) => {
      state.article = data
    }
  },
  actions: {
    getArticle ({commit}, data) {
      return new Promise((resolve, reject) => {
        request(data).then(res => {
          commit('GET_ARTICLE', res.data.data[0])
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
export default article 
