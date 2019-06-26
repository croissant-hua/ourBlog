import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
