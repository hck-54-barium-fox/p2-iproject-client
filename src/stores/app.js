import { defineStore } from "pinia";

import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useAppStore = defineStore("app", {
  state: () => ({
    productList: [],
    bookMarkList: [],
    productDetail: [],
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
      localStorage.clear();
      this.isLogin = false;
      this.bookMarkList = [];
      this.router.replace("/login");
    },

    async fetchProduct(query) {
      try {
        const { page, brand } = query;
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products/?brand=${brand}&page=${page}`,
        });
        this.productList = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchProductById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products/${id}`,
        });
        this.productDetail = data;
        // console.log(data,">>>");
      } catch (err) {
        console.log(err);
      }
    },

    async addBookmark(productId) {
      try {
        await axios.post(
          `${baseUrl}/bookmarks/${productId}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log("Success add bookmark");
      } catch (err) {
        console.log(err);
      }
    },

    async fetchBookmarkList() {
      try {
        const { data } = await axios.get(`${baseUrl}/bookmarks`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.bookMarkList = data;
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
