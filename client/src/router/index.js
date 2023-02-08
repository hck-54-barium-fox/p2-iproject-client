import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import AddEvent from "../views/AddEventPage.vue"
import HomePage from "../views/HomePage.vue"
import DetailsPage from "../views/EventDetailPage.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/createEvent',
      name: 'createEvent',
      component: AddEvent
    },
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path:'/event/:eventId',
      name:'detailsPage',
      component: DetailsPage
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
