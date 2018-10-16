// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from '@/components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import IndexPage from './page/index.vue'
import DetailPage from './page/detail.vue'
import OrderLsit from './page/orderList'

import DetailAnaPage from './page/detail/analysis.vue'
import DetailCouPage from './page/detail/count'
import DetailForPage from './page/detail/forecast.vue'
import DetailPubPage from './page/detail/publish.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Vuex)

// let store = new Vuex.Store({
//     state: {
//       totalPrice: 0
//     },
//     mutations: {
//       increment(state,price){
//         state.totalPrice += price
//       },
//       decrement (state,price) {
//         state.totalPrice -= price
//       }
//     }

//})
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
      ]
    },
    {
      path: '/orderList',
      component: OrderLsit
    }
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {  Layout },
  template: '<Layout/>'
})
