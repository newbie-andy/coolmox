import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '@/components/pages/NewsList'
import NewsPage from '@/components/pages/NewsPage'
import NewDetail from '@/components/pages/NewDetail'
import BlogPage from '@/components/pages/BlogPage'
import Materials from '@/components/pages/Materials'
import Projects from '@/components/pages/Projects'
import About from '@/components/pages/About'


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
      name: 'newslist',
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
    { 
      name: 'blogs', 
      path: '/blogs', 
      component: BlogPage
    },
    { 
      name: 'materials', 
      path: '/materials', 
      component: Materials
    },
    { 
      name: 'projects', 
      path: '/projects', 
      component: Projects
    },
    { 
      name: 'About', 
      path: '/about', 
      component: About
    },
  ]
})
