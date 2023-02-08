import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
  }),
  getters: {},
  actions: {
    async doLogin(dataForm) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/login`,
          data: dataForm,
        });
        // console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
