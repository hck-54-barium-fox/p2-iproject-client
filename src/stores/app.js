import { defineStore } from "pinia";

import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useAppStore = defineStore("app", {
  state: () => ({
    productList: [],
    isLogin: localStorage.getItem("access_token") ? true : false,
  }),
  getters: {},
  actions: {
    async registerCust(param) {
      try {
        await axios({
          method: "POST",
          url: `${baseUrl}/customers/register`,
          data: param,
        });
        this.router.replace("/login");
      } catch (err) {
        console.log(err, "at register stores");
      }
    },

    async doLogin(param) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/customers/login`,
          data: param,
        });
        this.isLogin = true;
        localStorage.setItem("access_token", data.token);
        this.router.push("/");
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
