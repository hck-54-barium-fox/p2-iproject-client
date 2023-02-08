import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const DATA_URL = "http://localhost:3000";

export const usePoemStore = defineStore("poem", {
  state: () => {
    return {
      isLogin: !!localStorage.getItem("access_token"),
      quotes: "",
      poem: "",
      poemId: "",
      search: "",
      paymentlink: "",
      rawImage: "",
      imageLink: "",
      myLetters : [],
      isviewing: ""
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
    async randomQuote() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${DATA_URL}/randomquote`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.quotes = data;
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
    async searchPoem(search) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${DATA_URL}/poetry/find/${search}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.isviewing = false
        this.poem = data.content;
        this.poemId = data.id;
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
    async paymentPoem(payload) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${DATA_URL}/poetry/payment/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.paymentlink = data;
      } catch (err) {
        console.log(err.response.data.msg);
      }
    },
    async uploadImage(letterId, image) {
      try {
        let form = new FormData();
        form.append("image", image);
        const { data: response } = await axios({
          method: "post",
          url: `${DATA_URL}/poetry/upload-image/${letterId}`,
          data: form,
          headers: {
            access_token: localStorage.getItem("access_token"),
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`,
          },
        });
        this.imageLink = response.data.url;
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async uploadImage(letterId, image) {
      try {
        let form = new FormData();
        form.append("image", image);
        const { data: response } = await axios({
          method: "post",
          url: `${DATA_URL}/poetry/upload-image/${letterId}`,
          data: form,
          headers: {
            access_token: localStorage.getItem("access_token"),
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`,
          },
        });
        this.imageLink = response.data.url;
      } catch (err) {
        console.log(err.response.data);
      }
    },
    async sendEmail(letter, id) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${DATA_URL}/poetry/sendemail/${id}`,
          data: letter,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async fetchMyLetter() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${DATA_URL}/poetry/myletter`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data)
        this.myLetters = data
      } catch (err) {
        console.log(err.response.data)
      }
    },

    async poetryById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${DATA_URL}/poetry/letterbyid/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.poem = data.content;
        this.poemId = data.id;
        this.isviewing = true
        this.$router.push('/resultpoem')
      } catch (err) {
        console.log(err.response.data)
      }
    },
  },
});
