import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCardStore = defineStore({
  id: "card",
  state: () => {
    return {
      username: ''
    };
  },
  getters: {},
  actions: {
    async postLogin(user){
      try {
        let { data } = await axios({
          method: 'post',
          url: 'http://localhost:3000/login',
          data: user
        })
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('username', data.username)
        this.username = localStorage.username
        localStorage.setItem('userId', data.id)
        Swal.fire({
          title: "Great!",
          text: `Welcome back, ${data.username.split('@')[0]}`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async submitRegister(customer) {
      try {
        let { data } = await axios({
          method: "post",
          url: "http://localhost:3000/register",
          data: customer,
        });
        Swal.fire({
          title: "Great!",
          text: `Welcome to the club, ${customer.email.split('@')[0]}! Please login first!`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
      } catch (error) {
        let errorMsg = error.response.data.errorsMessages.map(
          (el) => el.message + "<br>"
        );
        Swal.fire({
          title: "Error!",
          html: `${errorMsg.join("")}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
  }
});

