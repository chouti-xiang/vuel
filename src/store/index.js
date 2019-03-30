import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import login from './modules/login'
import add from './modules/add'
import article from './modules/article'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    login,
    add,
    article
  },
  getters
})

export default store
