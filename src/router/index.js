import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import listings from '../views/listings.vue';
import addListings from '../views/addListings.vue';
import login from '../views/login.vue';
import signup from '../views/signup.vue';



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:login,
    beforeEnter:(to,from,next) => {
      const user = firebase.auth().currentUser;
      if(user)
      {
        next()
      }else{
        next('/');
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component:signup,
    beforeEnter:(to,from,next) => {
      const user = firebase.auth().currentUser;
      if(user)
      {
        next()
      }else{
        next('/');
      }
    }
  },
  {
    path: '/listings',
    name: 'listings',
    component:listings
  },
  {
    path: '/addlistings',
    name: 'addlistings',
    component:addListings,
    beforeEnter:(to,from,next) => {
      const user = firebase.auth().currentUser;
      if(user)
      {
        next()
      }else{
        next('/login');
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
   const requiresAuth = to.matched.some(x => x.meta.requireAuths)
   const currentUser = firebase.auth().currentUser;

   if (requiresAuth && !currentUser) {
    next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})



export default router
