import Vue from 'vue'

import VueRouter from 'vue-router'

import routes from './routes'

import Master from './components/layouts/Master'



Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */


new Vue({
 router: router,
  components: { Master },
  template: '<Master/>'
}).$mount('#app')