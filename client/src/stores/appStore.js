import { defineStore } from "pinia";
import axios from "axios";
const domain = "https://wrathful-mailbox-production.up.railway.app";
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
  },
});
