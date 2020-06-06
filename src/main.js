import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'


// FIREBASE
// const firebaseConfig = {
//   apiKey: "AIzaSyCxnfodqgr1par1q8-R16X_0JNV003vcMU",
//   authDomain: "practiceprojects-a7db3.firebaseapp.com",
//   databaseURL: "https://practiceprojects-a7db3.firebaseio.com",
//   projectId: "practiceprojects-a7db3",
//   storageBucket: "practiceprojects-a7db3.appspot.com",
//   messagingSenderId: "895109505386",
//   appId: "1:895109505386:web:67ff04a7c3e1a980800513",
//   measurementId: "G-HKYWWL4797"
// };


Vue.config.productionTip = false

Vue.component('navbar',require('../src/components/navBar.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
