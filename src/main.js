import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import firebase from 'firebase'
import VueFirestore from 'vue-firestore'
import 'firebase/firestore'
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

Vue.use(VueFirestore,{
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true 
})

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;
window.firestore = firebase.firestore();
window.storage = firebase.storage();
firebase.auth().onAuthStateChanged((currentUser)=>{
     if(currentUser)
     {
      const user = {
        id:firebase.auth().currentUser.uid,
        email:firebase.auth().currentUser.email,
        username:firebase.auth().currentUser.displayName,
        photo:firebase.auth().currentUser.photoURL  
      } 
    
      store.dispatch('createUser',user);
     }
})




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


// Vue2-editor
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

// Vue2-Filters
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

// vue-phone-number-input
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

// Vue-Carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false;

Vue.component('navbar',require('../src/components/navBar.vue').default);
Vue.component('main-footer',require('../src/components/footer.vue').default);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

