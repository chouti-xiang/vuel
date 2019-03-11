import { requestArticle , responseArticle } from '@/api/home'
const add = {
  state: {
    data1:''
  },
  mutations: {
    GET_ARTICLE:(state, data) => {
      state.data1 = data
    }
  },
  actions: {
    addArticle ({commit}, data) {
      return new Promise((resolve, reject) => {
        requestArticle(data).then(res => {

          resolve()
        })
          .catch(
            error => {
              reject(error)
            })
      })  
    },
    getArticle ({commit}, data) {
      return new Promise((resolve, reject) => {
        responseArticle(data).then(res => {
          commit('GET_ARTICLE',res.data.data[0])
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
