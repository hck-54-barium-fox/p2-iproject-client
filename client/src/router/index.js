import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Store from '@/components/Store.vue';
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Cat from '@/components/Cat.vue'
import Animal from '@/components/Animal.vue'
import Checkout from '@/components/Checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  
      component: About
    },
    {
      path: '/store',
      component:Store
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/register',
      component:Register
    },
    {
      path:'/findCat',
      component:Cat
    },
    {
      path:'/findAnimal',
      component:Animal
    },
    {
      path:'/checkout',
      component:Checkout
    },
  ]
})

router.beforeEach((to,_,next)=>{
  const isLogin = !!localStorage.getItem('access_token');
  if(isLogin && to.path === '/login'){
    next('/')
  } else if(!isLogin && to.path ==='/'){
    next('/login')
  }
   else{
    next()
  }
})


export default router
