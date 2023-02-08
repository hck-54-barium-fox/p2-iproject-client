import { defineStore } from "pinia";

import axios from "axios";
export const useAppStore = defineStore("app", {
  state: () => ({
    animeList: [],
  }),
  getters: {},
  actions: {
    async doLogin(param) {
      try {
        console.log(param, ">>>>");
        const { data } = await axios({
          method: "POST",
          url: "https://api.hacktiv8.khanz1.dev/v1/auth/sign-in",
          data: param,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/animes");
        console.log(data, "//////");
      } catch (err) {
        console.log(err);
      }
    },

    doLogout() {
      localStorage.removeItem("access_token");
      this.router.replace("/login");
    },
  },
});
