import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId:
    "185947016600-mvi45bjet19qoc4qqsrfv152arfsnt24.apps.googleusercontent.com",
});

const pinia = createPinia();
app.use(pinia);
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
app.use(router);

app.mount("#app");
