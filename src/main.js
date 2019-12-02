import Vue from 'vue'
import App from './App.vue'

import routes from './router'
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'
import repo from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store({
  modules: {
    repo
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
