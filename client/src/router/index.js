import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import BookAdd from '@/components/BookAdd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BookList
    },
    { 
      path: '/bookadd', 
      component: BookAdd 
    }
  ]
})
