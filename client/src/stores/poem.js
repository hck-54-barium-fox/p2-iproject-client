import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const DATA_URL = "http://localhost:3000";

export const usePoemStore = defineStore("poem", {
  state: () => {
    return {
      isLogin: !!localStorage.getItem("access_token"),
      quotes : ''
    };
  },

  getters: {},
  actions: {
    async googleLogin(response) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${DATA_URL}/user/google-login`,
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.access_token = data.access_token;
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.$router.push("/");
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
    async randomQuote(){
      try {
        const {data} = await axios({
          method: "GET",
          url: `${DATA_URL}/randomquote`,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        this.quotes = data
      } catch (err) {
        console.log(err.response.data.msg);
      }
    }
  },
});
