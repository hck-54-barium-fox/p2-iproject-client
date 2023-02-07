import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


const BASE_URL = 'http://localhost:6060/users'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,

  }),

  actions: {

    async handleLogin(input) {
      try {
        const { data } = await axios({
          url: BASE_URL + '/login',
          method: 'post',
          data: input
        })
        this.router.push('/')
        localStorage.setItem('access_token', data.access_token)
        if (localStorage.access_token) {
          this.isLogin = true
        }
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success login',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },


    async handleRegister(form) {
      try {

        const { data } = await axios({
          method: 'post',
          url: BASE_URL + '/register',
          data: form
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success Register',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/login')

      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          // text: "",
          text: err.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
        // console.log(err, '<<< register err');
      }
    },

  },
})