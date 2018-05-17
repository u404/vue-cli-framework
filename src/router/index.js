import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Index2 from '@/views/Index2'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index2',
      name: 'Index2',
      component: Index2
    }
  ]
})
