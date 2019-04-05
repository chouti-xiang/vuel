import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import login from './modules/login'
import add from './modules/add'
import article from './modules/article'
import stylebook from './modules/stylebook'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    login,
    add,
    article,
    stylebook
  },
  getters
})

export default store
