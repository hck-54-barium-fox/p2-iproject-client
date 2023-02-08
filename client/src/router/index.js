import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('access_token')
  if (isLogin && (to.name == 'login' || to.name == 'register')) {
    next('/')
  } else if (!isLogin && to.name == 'checkout') {
    next('/login')
  } else {
    next()
  }
})

export default router
