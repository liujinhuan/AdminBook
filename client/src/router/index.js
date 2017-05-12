import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import BookList from '@/components/BookList'
import BookAdd from '@/components/BookAdd'

// 引用中间件
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
