import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomePage from '../views/HomePage.vue'
import Exercise from '../views/Exercise.vue'
import Trainer from '../views/Trainer.vue'
import MyExercise from '../views/MyExercise.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise
    },
    {
      path: '/trainer',
      name: 'trainer',
      component: Trainer
    },
    {
      path: '/myexercise',
      name: 'my exercise',
      component: MyExercise
    }
  ]
})

export default router
