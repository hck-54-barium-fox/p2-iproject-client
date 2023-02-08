import { createRouter, createWebHistory } from "vue-router";
import GetStarted from "../screens/GetStarted.vue";
import PoemGenerate from "../screens/PoemGenerate.vue";
import ResultPoem from "../screens/ResultPoem.vue";
import SubmitPoem from "../screens/SubmitPoem.vue";
import QuoteGenerate from "../screens/QuoteGenerate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GetStarted,
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
      path: "/submitpoem",
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

export default router;
