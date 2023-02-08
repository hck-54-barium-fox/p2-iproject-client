import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import InvitationForm from '../views/InvitationForm.vue'
import Sampul from '../views/invitations/Sampul.vue'
import MainPage from '../views/invitations/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/contact',
      name:'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/invitation-form',
      name: 'invitation-form',
      component: InvitationForm
    },
    {
      path: '/cpwcpp',
      name: 'cpwcpp',
      component: Sampul
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: MainPage
    } 
  ]
})

export default router
