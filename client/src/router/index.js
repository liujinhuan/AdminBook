import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import BookList from '@/components/BookList'
import BookAdd from '@/components/BookAdd'
import BookUpdate from '@/components/BookUpdate'
import BookDetail from '@/components/BookDetail'

// 引用中间件
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
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
})
