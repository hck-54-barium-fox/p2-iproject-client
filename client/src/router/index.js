import { createRouter, createWebHistory } from "vue-router";
import GetStarted from "../screens/GetStarted.vue";
import PoemGenerate from "../screens/PoemGenerate.vue";
import ResultPoem from "../screens/ResultPoem.vue";
import SubmitPoem from "../screens/SubmitPoem.vue";
import QuoteGenerate from "../screens/QuoteGenerate.vue";
import GoogleLogin from "../screens/GoogleLogin.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GetStarted,
    },
    {
      path: "/login",
      name: "login",
      component: GoogleLogin,
    },
    {
      path: "/generatepoem",
      name: "generatepoem",
      component: PoemGenerate,
    },
    {
      path: "/resultpoem",
      name: "resultpoem",
      component: ResultPoem,
    },
    {
      path: "/submitpoem/:letterId",
      name: "submitpoem",
      component: SubmitPoem,
    },
    {
      path: "/quotegenerate",
      name: "quotegenerate",
      component: QuoteGenerate,
    },
  ],
});

router.beforeEach((to, from, next)=>{
  const isLogin = !!localStorage.getItem('access_token')
  if(!isLogin && to.path !== '/login'){
    next('/login')
  } else if(isLogin && to.path === '/login'){
    next('/')
  } else{
    next()
  }
})

export default router;
