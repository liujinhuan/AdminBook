import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/components/common/Home'
// 登录
import Login from '@/components/Login'
// 图书
import BookList from '@/components/BookList'
import BookAdd from '@/components/BookAdd'
import BookUpdate from '@/components/BookUpdate'
import BookDetail from '@/components/BookDetail'
// 用户
import UserList from '@/components/user/UserList'
import UserAdd from '@/components/user/UserAdd'
import UserUpdate from '@/components/user/UserUpdate'
import UserDetail from '@/components/user/UserDetail'

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
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: UserList
        },
        { 
          path: '/useradd', 
          name: 'useradd',
          component: UserAdd 
        },
        { 
          path: '/userupdate', 
          name: 'userupdate',
          component: UserUpdate
        },
        { 
          path: '/userdetail', 
          name: 'userdetail',
          component: UserDetail
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
