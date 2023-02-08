import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueDisqus from "vue-disqus";

// import './assets/main.css'

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(VueDisqus, { shortname: "pinmemes" });
app.use(pinia);
app.use(router);

app.mount("#app");
