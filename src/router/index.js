import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import HomePage from '../pages/HomePage.vue'
import PlaylistPage from '../pages/PlaylistPage.vue'
import TrackPage from '../pages/TrackPage.vue'
import Callbacks from '../pages/Callbacks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/playlists',
      component: PlaylistPage
    },
    {
      path: '/tracks',
      component: TrackPage
    },
    {
      path: '/callbacks',
      component: Callbacks
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach( (to, from, next) => {
  let isLogin = !!localStorage.getItem('access_token')

  if(
      !isLogin && to.path === '/playlists'
      || !isLogin && to.path === '/tracks'
      || !isLogin && to.path === '/'
    ) {
    next('/login')
  } else if(
      isLogin && to.path === '/login'
      || isLogin && to.path === '/register'
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
