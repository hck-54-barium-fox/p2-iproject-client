import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import DetailProduct from '../views/DetailProduct.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component : Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailProduct
    },
  ]
})

export default router
