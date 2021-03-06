// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import utils from './assets/scripts/utils.js'
import store from './store'
import App from './App'
import router from './router'
import plugins from './plugins'
require('./assets/styles/base.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
