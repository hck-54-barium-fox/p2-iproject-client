import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/register",
    //   name: "register",
    //   component: RegisterPage,
    // },
  ],
});

// router.beforeEach((to, from, next) => {
//   const isLogin = !!localStorage.getItem("access_token");
//   if ((isLogin && to.path === "/login") || to.path === "/register") {
//     next("/home");
//   } else if (!isLogin && to.path === "/like") {
//     next("/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.access_token;
//   if (to.name == "like" && !isLogin) {
//     next("/login");
//   } else if (to.name == "login" && isLogin) {
//     next("/home");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   const isLogin = !!localStorage.access_token;
//   if (!isLogin && to.path === "/like") {
//     next("/login");
//   } else if (isLogin && to.path === "/login") {
//     next("/home");
//   } else {
//     next();
//   }
// });

export default router;
