import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
import Home from "@/pages/Home.vue"
import DetailPage from "@/pages/DetailPage.vue"
import Subscribe from "@/pages/Subscribe.vue"
import APOD from "@/pages/APOD.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      component:Login
    }, 
    {
      path:"/register",
      component:Register
    },
    {
      path:"/",
      component:Home
    },
    {
      path:"/planets/:id",
      component:DetailPage
    },
    {
      path:"/subscribe",
      component:Subscribe
    },
    {
      path:"/apod",
      component:APOD
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const isLogin = !!localStorage.getItem("access_token")
  const isSubscribe = localStorage.getItem("status") === "premium"

  if(isLogin && to.path === "/login" && to.path === "/register"){
    next("/")
  }else if (isLogin && !isSubscribe && to.path === "/apod"){
    next("/")
  } else if (!isLogin && (to.path !== "/login" && to.path !== "/register")){
    next("/login")
  }else if (isLogin && isSubscribe && to.path === "/subscribe"){
    next("/")
  }else{
    next()
  }
})

export default router
