import { createRouter, createWebHistory } from 'vue-router'

import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import Cart from '../views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/mycart',
      name: 'mycart',
      component: Cart
    },
  ]
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.name === 'home' && !localStorage.access_token) next({name: 'login'})
  if(to.name === 'myhero' && !localStorage.access_token) next({name: 'login'})
  if(to.name === 'login' && localStorage.access_token) next({name: 'home'})
  else next()
})

export default router
