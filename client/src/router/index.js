import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import ContentPage from "../views/ContentPage.vue";
import DetailPage from "../views/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/",
      component: HomePage,
      children: [
        {
          path: "",
          component: ContentPage,
        },
        {
          path: "/detail/:title",
          component: DetailPage,
        },
      ],
    },
  ],
});

router.beforeEach((to, form, next) => {
  const isLogin = !!localStorage.getItem("access_token");
  if (isLogin && to.path === "/login") {
    next("/");
  } else if (!isLogin && to.path === "/") {
    next("/login");
  } else {
    next();
  }
});

export default router;
