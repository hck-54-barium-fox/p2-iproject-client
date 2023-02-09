import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import Toast from "vue-toastification";

import App from "./App.vue";
import router from "./router/app";

import "vue-toastification/dist/index.css";

const app = createApp(App);
const options = {
  position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.3,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
};
app.use(Toast, options);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);

app.mount("#app");
