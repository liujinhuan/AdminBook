import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Home from '@/components/common/Home'
import BookList from '@/components/BookList'
import BookAdd from '@/components/BookAdd'
import BookUpdate from '@/components/BookUpdate'
import BookDetail from '@/components/BookDetail'
import Login from '@/components/Login'

// 引用中间件
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: '/',
          component: BookList
        },
        {
          path: '/booklist',
          name: 'booklist',
          component: BookList
        },
        { 
          path: '/bookadd', 
          name: 'bookadd',
          component: BookAdd 
        },
        { 
          path: '/bookupdate', 
          name: 'bookupdate',
          component: BookUpdate
        },
        { 
          path: '/bookdetail', 
          name: 'bookdetail',
          component: BookDetail
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }

  ]
})
