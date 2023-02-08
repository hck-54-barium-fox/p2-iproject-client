import { defineStore } from "pinia";
import axios from "axios";
const domain = "";
const localhost = "http://localhost:3000";

export const useAppStore = defineStore("app", {
  state: () => ({
    isLogin: false,
    postList: [],
    memeList: [],
    postDataDetail: "",
    memeDataDetail: "",
    memeImage: "",
    boxCount: 0,
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

    doLogout() {
      this.isLogin = false;
      localStorage.removeItem("access_token");
      this.router.push("/login");
    },

    async fetchPosts() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${localhost}/posts`,
        });
        // console.log(data);
        this.postList = data;
        console.log(this.postList);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPostDetail(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${localhost}/posts/${id}`,
        });

        this.postDataDetail = data;
        console.log(postDataDetail, "<<<<<<<<<<<< Detail");
      } catch (err) {
        console.log(err);
      }
    },

    async fetchToGenerateMeme() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${localhost}/memes`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data);
        this.memeList = data;
        console.log(this.memeList);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchMemeDetail(id) {
      try {
        // console.log(id);
        const { data } = await axios({
          method: "GET",
          url: `${localhost}/memes/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.boxCount = data[0].box_count;
        // console.log(this.boxCount, ">>>>>>>>>>>>>>>>>>");
        this.memeDataDetail = data[0];
        this.memeImage = data[0].url;
        // console.log(this.memeDataDetail, "<<<<<<<<<<<< Detail");
      } catch (err) {
        console.log(err);
      }
    },

    async generateMeme(form) {
      try {
        console.log(form.template_id);
        const { data } = await axios({
          method: "POST",
          url: `${localhost}/memes`,
          data: form,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data.data.url, "KKKKKKKKKKKKK");
        this.memeImage = data.data.url;
        this.router.push(`/memes/${form.template_id}`);
      } catch (err) {
        console.log(err);
      }
    },

    async postMeme(form) {
      try {
        console.log(form, ":::::::::::::::::::");
        const { data } = await axios({
          method: "POST",
          url: `${localhost}/memes/postMeme`,
          data: form,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data.data.url, "LLLPPPPPPPP");
        this.router.push(`/`);
      } catch (err) {
        console.log(err);
      }
    },

    async uploadFile(image) {
      try {
        console.log(image);
        const post = await axios({
          method: "POST",
          url: `${localhost}/memes/memeMulter`,
          data: image,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchPosts();
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
