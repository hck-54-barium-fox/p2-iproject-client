import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import NewsGame from '../views/NewsGame.vue'
import Profile from '../views/Profile.vue'
import DetailGames from '../views/DetailGames.vue'
import DetailNewsGames from '../views/DetailNewsGames.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginHome',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      
      path:'/newsGame',
      name : 'NewsGame',
      component: NewsGame

    },
    {
      
      path:'/profile',
      name : 'profile',
      component: Profile

    },
    {
      
      path:'/detailGames/:steam_appid',
      name : 'DetailGames',
      component: DetailGames

    },
    {
      
      path:'/detailNewsGames/:id',
      name : 'DetailNewsGames',
      component: DetailNewsGames

    }

  ]

})
// let token = localStorage.getItem('access_token')
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !token) {
//     next({ name: 'Home' })
//   } else {
//     next()
//   }
// })

export default router
