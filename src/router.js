import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Company from './views/Company.vue'
import ComingSoon from './views/ComingSoon.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 网站建设中ing
    {
      path:'/comingSoon',
      name: 'comingSoon',
      component: ComingSoon
    },
    // 邮轮公司
    {
      path: '/company',
      name: 'company',
      component: Company
    }
  ]
})
