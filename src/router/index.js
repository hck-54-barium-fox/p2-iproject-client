import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Navbar from '../components/Navbar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Navbar
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     
    }
  ]
})

export default router
