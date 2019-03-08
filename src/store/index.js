import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import login from './modules/login'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    login
  },
  getters
})

export default store
