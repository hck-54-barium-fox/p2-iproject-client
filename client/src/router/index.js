import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import MyDeckPage from '../views/MyDeckPage.vue'
import NewsPage from '../views/NewsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/mydeck',
      component: MyDeckPage
    },
    {
      path: '/news',
      component: NewsPage
    }
  ]
})

export default router
