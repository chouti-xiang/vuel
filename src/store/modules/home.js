import axios from 'axios'
import qs from 'qs'
import { setsessionStorage } from '@/utils/sessionStorage'

const home = {
state: {
  pid: '',
  url: '',
  item: ''
},
mutations: {//同步
  GET_ITEM: (state, data) => {
    state.item = data
    setsessionStorage('get_item', JSON.stringify(data))
  }
},
actions: {//异步
  get_qqtj({commit}, data) {
    console.log(data)
    axios.post(data.url, qs.stringify({
      pid: data.pid
    }),
    {
      emulateJSON: true
    })
      .then(res => {
      commit('GET_ITEM', res.data.data)
      // 
    })
  }
}
}

export default home