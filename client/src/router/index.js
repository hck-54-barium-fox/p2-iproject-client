import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue"
import SignupPage from "../views/SignupPage.vue"
import HomePage from "../views/HomePage.vue"
import ProductPage from "../views/ProductPage.vue"
import ResultPage from "../views/ResultPage.vue"

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
      component: SignupPage
    },
    {
      path : '/products',
      name : 'products',
      component : ProductPage
    },
    {
      path : '/result',
      name : 'result',
      component : ResultPage
    }
  ]
})
//router guard
router.beforeEach((to, from, next)=>{
  const isLogin = !!localStorage.getItem('access_token');
  if(isLogin && to.path === '/login'){
    next('/')
  }else if(!isLogin && to.path === '/products'){
    next('/login')
  }else {
    next()
  }
})

export default router
