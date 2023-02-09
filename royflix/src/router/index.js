import { createRouter, createWebHistory } from 'vue-router'
import  LoginPage  from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import Playlist from '../views/PlaylistPage.vue'
import DetailMovie from '../views/DetailMovie.vue'
import TrendingMovie from '../views/TrendingMovie.vue'
import RegisterPage from '../views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/login',
      component : LoginPage
    },
    {
      path : '/register',
      component : RegisterPage
    },
    {
      path : '/',
      component : HomePage
    },
    {
      path : '/playlist',
      component : Playlist
    },
    {
      path : '/detail/:id',
      component : DetailMovie
    },
    {
      path : '/trend',
      component : TrendingMovie
    },
  ]
})

router.beforeEach((to,from,next) => {
  const isLogin = localStorage.getItem('access_token')
  if(isLogin && to.path === '/login'){
    next('/')
  }else if(!isLogin && to.path === '/'){
    next('/login')
  }else{
    next()
  }
})

export default router
