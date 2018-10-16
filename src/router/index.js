import Vue from 'vue'
import Router from 'vue-router'
import Apple from '@/components/HelloWorld'
import Banana from '@/components/banana'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/apple'
    },
    {
      path: '/apple',
      name: 'apple',
      component: Apple,
      // children: [
      //   {

      //   }
      // ]
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})
