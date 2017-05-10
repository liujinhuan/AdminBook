import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    { 
      path: '/book', 
      component: Book 
    }
  ]
})
