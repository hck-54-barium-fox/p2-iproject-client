import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import MainMap from '../views/MainMap.vue'
import MyBookmarkPage from '../views/MyBookmarkPage.vue'
import LandmarkDetail from '../views/LandmarkDetail.vue'
import AddLandmarkForm from '../views/AddLandmarkForm.vue'
import EditLandmarkForm from '../views/EditLandmarkForm.vue'

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
      path: '/map',
      component: MainMap
    },
    {
      path: '/bookmarks',
      component: MyBookmarkPage
    },
    {
      path: '/landmarks/:id',
      component: LandmarkDetail
    },
    {
      path: '/landmarks/add',
      component: AddLandmarkForm
    },
    {
      path: '/landmarks/edit/:id',
      component: EditLandmarkForm
    }
  ]
})

export default router
