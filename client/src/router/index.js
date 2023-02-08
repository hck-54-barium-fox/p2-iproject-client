import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import MyCartPage from '../views/MyCartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
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
      path: '/mycart',
      name: 'checkout',
      component: MyCartPage
    }

  ]
})
router.beforeEach((to, from, next)=>{
  const isLogin = !!localStorage.getItem('access_token')
  if(isLogin && to.path === '/checkout'){
    next()
  } else if(isLogin && (to.path === '/login' || to.path === '/register')){
    next('/')
  } else if(!isLogin && to.path == '/checkout'){
    next('/')
  }else{
    next()
  }
})
export default router
