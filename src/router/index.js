import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import ListPage from '../views/ListHotelsPage.vue';
import ForgetPasswordPage from '../views/ForgotPasswordPage.vue';
import DetailPage from '../views/DetailPage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/register',
      component: RegisterPage,
    },
    {
      path: '/hotels',
      component: ListPage,
    },
    {
      path: '/forgot-password',
      component: ForgetPasswordPage,
    },
    {
      path: '/detail/:id',
      component: DetailPage,
      name: 'detail',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('access_token');
  if (
    (isLogin && to.path === '/login') ||
    (isLogin && to.path === '/register')
  ) {
    next('/');
  } else if (!isLogin && to.name === 'detail') {
    next('/login');
  } else {
    next();
  }
});

export default router;
