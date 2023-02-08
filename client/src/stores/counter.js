import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


const baseUrl = 'http://localhost:3000'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    phone: [],
    detailPhone: {},
    
  }),
  actions: {
    handleRegister(register) {
      axios({
        method: "POST",
        url: `${baseUrl}/register`,
        data: register,
      })
      .then((res) => {
        this.router.push("/login");
        Swal.fire({
          icon: "success",
          title: "You did it",
          text: 'Success create account'
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Something wrong",
          text: err.response.data.message
        });
      });
    },

    handleLogin(input) {
      axios({
        method: "POST",
        url: `${baseUrl}/login`,
        data: input,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: `Halo ${res.data.email}`,
          text: 'Rent for your ego!'
        });
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("email", res.data.email);
        this.router.push("/smartphones");
        this.isLogin = true;
      })
      .catch((err) => {
        Swal.fire({
          icon: "success",
          title: "Something wrong!",
          text: err.response.data.message
        });
      });
    },

    handleGoogleLogin(response) {
      axios({
        method: "POST",
        url: `${baseUrl}/googleSignIn`,
        headers: {
          google_token: response.credential,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `Halo ${res.data.email}`,
          text: 'Rent for your ego!'
        });
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("email", res.data.email);
        this.isLogin = true;
        this.router.push("/smartphones");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Something wrong`,
          text: err.response.data.message
        });
      });
    },

    fetchDataPhone(){
      axios({
        method: "get",
        url: `${baseUrl}/smartphones`,
      })
      .then((res) => {
        this.phone = res.data;
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Something wrong`,
          text: err.response.data.message
        });
      });
    },

    handleDetailPhoneById(id) {
      axios({
        method: "get",
        url: `${baseUrl}/smartphones/${id}`,
      })
        .then((res) => {
          this.detailPhone = res.data;
          this.handleQrCode(id);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `Something wrong`,
            text: err.response.data.message
          });
        });
    },
  }

})
