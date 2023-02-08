import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import AddEvent from "../views/AddEventPage.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/createsevent',
      name: 'addEvent',
      component: AddEvent
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
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.access_token
//   if ((to.name == 'home' || to.name == 'myheroes') && !isLogin) {
//     next('/login')
//   } else if (to.name == 'login' && isLogin) {
//     next('/')
//   }
//   next()
// })
export default router
