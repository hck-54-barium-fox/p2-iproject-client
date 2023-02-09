import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import DetailProduct from '../views/DetailProduct.vue'
import MyProduct from '../views/MyProduct.vue'
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
    {
      path: '/myproduct',
      name: 'myproduct',
      component: MyProduct
    },
  ]
})
router.beforeEach((to, from, next)=>{ 
  const isLogin = localStorage.access_token
  if(isLogin && to.path === '/myproduct'){
    next()
  } else if(isLogin && (to.path === '/login' || to.path === '/register')){
    next('/')
  } else if(!isLogin && to.path == '/myproduct'){
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: 'login dulu',
    // })
    next('/login')
  }else{
    next()
  }
})
export default router
