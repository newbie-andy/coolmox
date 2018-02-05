import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '@/components/pages/NewsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewsList',
      component: NewsList
    }
  ]
})
