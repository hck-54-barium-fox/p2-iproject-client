import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EventDetailPage from '../views/EventDetailPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import EventMoreDetailPage from '../views/EventMoreDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/event/:name',
      name: 'event',
      component: EventDetailPage
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
      path: '/eventDetail/:id',
      name: 'eventDetail',
      component: EventMoreDetailPage
    }
  ]
})


router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('access_token')

  if (!isLogin && (to.name === 'home' || to.name === 'event' || to.name === 'eventDetail')) {
    next('/login')
  } else if (isLogin && (to.name === 'register' || to.name === 'login')) {
    next('/')
  } else {
    next()
  }
})

export default router
