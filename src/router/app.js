import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
// import MyCard from "../views/MyCartView.ue";
import ProductDetail from "../views/ProductDetailView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/products/:id",
      name: "productDetail",
      component: ProductDetail,
    },
  ],
});

export default router;
