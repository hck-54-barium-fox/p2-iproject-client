import { defineStore } from "pinia";
import axios from "axios";
const domain = "";
const localhost = "http://localhost:3000";

export const useAppStore = defineStore("app", {
  state: () => ({
    isLogin: false,
  }),

  getters: {},
  actions: {
    isLoginToggle(status) {
      this.isLogin = status;
    },

    async doLogin(form) {
      try {
        console.log(form);
        const { data } = await axios({
          method: "POST",
          url: `${localhost}/login`,
          data: form,
        });
        this.isLogin = true;

        localStorage.setItem("access_token", data.access_token);

        this.router.push("/memes");
        console.log(data, "<<<<<<<<<<<<<<<");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
