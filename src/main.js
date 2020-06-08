import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import firebase from 'firebase'

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAv0iXoVETQxjvwc98k6J3jufelJE7UB4Y",
  authDomain: "vue-projects-6adeb.firebaseapp.com",
  databaseURL: "https://vue-projects-6adeb.firebaseio.com",
  projectId: "vue-projects-6adeb",
  storageBucket: "vue-projects-6adeb.appspot.com",
  messagingSenderId: "1065277667255",
  appId: "1:1065277667255:web:d4cedff0ba7fbd282a9a32"
};

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

// Sweetalert
import Swal from 'sweetalert2'
window.Swal = Swal;

window.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})




Vue.config.productionTip = false

Vue.component('navbar',require('../src/components/navBar.vue').default);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
