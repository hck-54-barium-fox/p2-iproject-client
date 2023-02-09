import { defineStore } from "pinia";
import axios from "axios";
const domain = "https://deeply-watch-production.up.railway.app";
const localhost = "http://localhost:3000";
import Swal from "sweetalert2";

export const useAppStore = defineStore("app", {
  state: () => ({
    isLogin: false,
    postList: [],
    memeList: [],
    postDataDetail: "",
    memeDataDetail: "",
    memeImage: "",
    boxCount: 0,
    isUploadImg: false,
    activePreLoader: false,
  }),

  getters: {},
  actions: {
    isLoginToggle(status) {
      this.isLogin = status;
    },

    async doRegister(form) {
      try {
        console.log(form);
        const { data } = await axios({
          method: "POST",
          url: `${domain}/register`,
          data: form,
        });

        this.activePreLoader = true;

        setTimeout(() => {
          this.activePreLoader = false;
          this.router.push("/login");

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Successfully, Please check your email to verified",
            showConfirmButton: false,
            timer: 2000,
          });
        }, 1500);

        // console.log(data, "<<<<<<<<<<<<<<<");
      } catch (err) {
        this.activePreLoader = false;
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async doLogin(form) {
      try {
        console.log(form);
        const { data } = await axios({
          method: "POST",
          url: `${domain}/login`,
          data: form,
        });
        this.isLogin = true;

        localStorage.setItem("access_token", data.access_token);

        this.activePreLoader = true;

        setTimeout(() => {
          this.activePreLoader = false;
          this.router.push("/memes");

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(data, "<<<<<<<<<<<<<<<");
        }, 1500);
      } catch (err) {
        console.log(err);
        this.activePreLoader = false;
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    doLogout() {
      this.isLogin = false;
      localStorage.removeItem("access_token");

      this.activePreLoader = true;

      setTimeout(() => {
        this.activePreLoader = false;
        this.router.push("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }, 1500);
    },

    async fetchPosts() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${domain}/posts`,
        });
        // console.log(data);
        this.postList = data;
        console.log(this.postList);
      } catch (err) {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async fetchPostDetail(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${domain}/posts/${id}`,
        });

        this.postDataDetail = data;
        console.log(postDataDetail, "<<<<<<<<<<<< Detail");
      } catch (err) {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async fetchToGenerateMeme() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${domain}/memes`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data);
        this.memeList = data;
        console.log(this.memeList);
      } catch (err) {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async fetchMemeDetail(id) {
      try {
        // console.log(id);
        const { data } = await axios({
          method: "GET",
          url: `${domain}/memes/${id}`,
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
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async generateMeme(form) {
      try {
        console.log(form.template_id);
        const { data } = await axios({
          method: "POST",
          url: `${domain}/memes`,
          data: form,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.activePreLoader = true;

        setTimeout(() => {
          this.activePreLoader = false;
          console.log(data.data.url, "KKKKKKKKKKKKK");
          this.memeImage = data.data.url;
          this.router.push(`/memes/${form.template_id}`);
        }, 500);
      } catch (err) {
        console.log(err);
        this.activePreLoader = false;
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async postMeme(form) {
      try {
        console.log(form, ":::::::::::::::::::");
        const { data } = await axios({
          method: "POST",
          url: `${domain}/memes/postMeme`,
          data: form,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data.data.url, "LLLPPPPPPPP");

        this.activePreLoader = true;

        setTimeout(() => {
          this.activePreLoader = false;
          this.router.push(`/`);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Posting Meme Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }, 1500);
      } catch (err) {
        console.log(err);
        this.activePreLoader = false;
      }
    },

    async uploadFile(image) {
      try {
        console.log(image);
        const post = await axios({
          method: "POST",
          url: `${domain}/memes/memeMulter`,
          data: image,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.activePreLoader = true;

        setTimeout(() => {
          this.activePreLoader = false;
          this.fetchPosts();
        }, 1500);
        this.router.push("/");
      } catch (err) {
        console.log(err);
        this.activePreLoader = false;
      }
    },

    uploadImgShow() {
      this.isUploadImg = true;
    },
  },
});
