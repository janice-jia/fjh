import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Company from './views/Company.vue'
import ComingSoon from './views/ComingSoon.vue'
import GKcity from './views/GKcity.vue'
import BKcruise from './views/BKcruise.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
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
    },
    // 港口城市
    {
      path: '/gkcity',
      name: 'gkcity',
      component: GKcity
    },
    // 游轮百科
    {
      path: '/bkcruise',
      name: 'bkcruise',
      component: BKcruise
    }
  ]
})
