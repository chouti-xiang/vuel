import Vue from 'vue'
import Router from 'vue-router'

// import componentsRouter from './modules/components'
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
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/view/article/article')
    },
    {
      path: '/article/',
      component: () => import('@/view/article/article')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('@/view/tools/tools')
    }
  ]
})
