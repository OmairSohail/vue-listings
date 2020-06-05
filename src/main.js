import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

Vue.config.productionTip = false

Vue.component('navbar',require('../src/components/navBar.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
