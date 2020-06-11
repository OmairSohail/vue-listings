import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import listings from '../views/listings.vue';
import addListings from '../views/addListings.vue';
import login from '../views/login.vue';
import signup from '../views/signup.vue';
import standard from '../views/standard.vue';
import featured from '../views/featured.vue';
import premium from '../views/premium.vue';
import dashboard from '../views/dashboard.vue';
import userProfile from '../views/userProfile.vue';
import userListings from '../views/userListings.vue';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:dashboard,
    beforeEnter:(to,from,next) => {
      const user = firebase.auth().currentUser;
      if(!user)
      {
        next()
      }else{
        next('/');
      }
    },
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: userProfile
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'listings',
        component: userListings
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:login,
    beforeEnter:(to,from,next) => {
      const user = firebase.auth().currentUser;
      if(!user)
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
      if(!user)
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
    
  },
  {
    path:'/addlistings/standard',
    name:'standard',
    component:standard
  },
  {
    path:'/addlistings/featured',
    name:'featured',
    component:featured
  },
  {
    path:'/addlistings/standard',
    name:'standard',
    component:standard
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
