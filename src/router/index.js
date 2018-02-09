import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '@/components/pages/NewsList'
import NewsPage from '@/components/pages/NewsPage'
import NewDetail from '@/components/pages/NewDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'NewsList',
      component: NewsList,
      children: [
        { name: 'channel', path: 'channel/:channel', component: NewsPage},
      ]
    },
    { 
      name: 'detail', 
      path: '/new/channel/detail/:title', 
      component: NewDetail,
      props: true
    },
  ]
})
