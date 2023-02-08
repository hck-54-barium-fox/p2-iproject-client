import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import PhonePage from '../views/PhonePage.vue'
import DetailPhone from '../views/DetailPhone.vue'
import PurchasePage from '../views/PurchasePage.vue'
import HomePage from '../views/HomePage.vue'

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
      path: '/smartphones',
      name: 'smartphone',
      component: PhonePage
    },
    {
      path: '/smartphones/:id',
      name: 'smartphoneDetail',
      component: DetailPhone
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: PurchasePage
    },
  ]
})

export default router
