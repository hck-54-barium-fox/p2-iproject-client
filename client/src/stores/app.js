import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    listTaxonomies: [],
    eventDetail: [],
    listHotels: [],
    isLogin: false,
    geolocation: {
      latitude: -6.2,
      longitude: 106.816666,
    },
    eventMoreDetail: {},
  }),
  getters: {},
  actions: {
    async doRegister(user) {
      try {
        await axios({
          method: "POST",
          url: "http://localhost:3000/register",
          data: user,
        });
        Swal.fire({
          icon: 'success',
          title: 'Register Success!',
        })
        this.router.push("/login");
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        })
      }
    },
    async doLogin(user) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `http://localhost:3000/login`,
          data: user,
        });
        Swal.fire({
          icon: 'success',
          title: 'Login Success!',
        })
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err.response.data.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        })
      }
    },
    async doLogout() {
      localStorage.removeItem("access_token");
      this.isLogin = false;
      this.router.push("/login");
      Swal.fire({
        icon: 'success',
        title: 'Logout Success!',
      })
    },
    async fetchTaxonomies() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "http://localhost:3000/taxonomies",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.listTaxonomies = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchEventDetail(name) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `http://localhost:3000/events/${name}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.eventDetail = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchHotels(geolocation) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `http://localhost:3000/hotels`,
          headers: {
            latitude: geolocation.latitude,
            longitude: geolocation.longitude,
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.listHotels = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchEventMoreDetail(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `http://localhost:3000/eventDetail/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.eventMoreDetail = data;
      } catch (err) {
        this.router.go(-1)
        console.log(err);
      }
    },
  },
});
