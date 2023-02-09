import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Favorite from '../views/Favorite.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }

  ]
})



router.beforeEach((to, _, next) => {
  const isLogin = !!localStorage.getItem('access_token')
  
  // console.log(isLogin, '<<<<<');
  // console.log(to.path, '<<< topath');
  if (!isLogin && to.path === '/favorite') {
    // console.log('kamu harus login dulu '); 
    next('/')
  }
  else if (isLogin && to.path === '/login' || isLogin && to.path === '/register' ) {
    next('/')
  } 
  else {

    next()
  }
})


export default router
