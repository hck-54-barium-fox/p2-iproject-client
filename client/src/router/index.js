import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import WeaponDetailPage from '../views/WeaponDetailPage.vue'
import MyWeaponPage from '../views/MyWeaponPage.vue'
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
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/weapons/:id',
      name: 'weapons',
      component: WeaponDetailPage
    },
    {
      path: '/myWeapon',
      name: 'myWeapon',
      component: MyWeaponPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.access_token;
  if (!isLogin && to.path === "/like") {
    next("/login");
  } else if (isLogin && to.path === "/login") {
    next("/home");
  } else {
    next();
  }
})

export default router
