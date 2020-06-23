import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/sort',
    component: () => import('../views/Sort.vue')
  },
  {
    path:'/shoppingCart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path:'/myYg',
    component: () => import('../views/MyYg.vue')
  },
  {
    path:'/afterlogin',
    component: () => import('../views/AfterLogin.vue')
  },
  {
    path:'/search',
    component: () => import('../views/Search.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
