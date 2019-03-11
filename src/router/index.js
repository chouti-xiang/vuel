import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/home/home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/view/add/add')
    }
  ]
})
