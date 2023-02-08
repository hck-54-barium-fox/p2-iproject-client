import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


const BASE_URL = 'http://localhost:6060'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    data: {
      jadwalMajelis: "",
      jadwalSholat: "",
    }
  }),

  actions: {

    
  logout() {

    console.log('a;lkfja;lfjafj;al masuk logout');
    Swal.fire({
      title: 'Do you want to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Berhasil Logout',
        )
        // console.log('berhasil logout');
        localStorage.removeItem('access_token')
        localStorage.removeItem('username')
        this.isLogin = false
      }
      // this.router.push('/')
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
      // console.log(err, 'err login');
    })

  },


  async handleLogin(input) {
    try {
      const { data } = await axios({
        url: BASE_URL + '/users/login',
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
        url: BASE_URL + '/users/register',
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

  async jadwalSholat() {
    try {
      const { data } = await axios({
        method: 'get',
        url: BASE_URL + '/events/sholat/jakarta'
      })
      console.log(data.ashar, '<<<<<<< ini bos');
      this.data.jadwalSholat = data
      // console.log(this.data.jadwalSholat, ' jadwal sholat <<<<<<<<<<<<<');

    } catch (err) {
      console.log(err, '<<<<< jdadwal solat');
    }
  },

  // http://localhost:6060/events/

  async jadwalMajelis() {
    try {
      const { data } = await axios({
        method: 'get',
        url: "http://localhost:6060/events/"
      })
      this.data.jadwalMajelis = data
      // console.log(this.data.jadwalMajelis, '<<<<<<<<<<<<<<<<<<<<<<<< jadwal majelis');

    } catch (err) {
      console.log(err, '<<<<<<<< jadwal majelis');
    }
  },
  async likePost(id) {
    try {
      console.log(id, '<<<<<<<<<<<<<<<<<<<<<<<<<< ini bos idnya ');
      if (!localStorage.access_token) {
        // console.log('km harus login dulu');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You have to Log in first! ',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      else {

        console.log(id, '<<<< dari like post');
        const { data } = await axios({
          method: 'post',
          // url: BASE_URL + `/favorite/${id}`,
          url: `http://localhost:6060/events/favorite/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        // console.log(data, '<<<< likepost data');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (err) {
      console.log(err, 'ini bos dari like >>>>>>');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
      // console.log(err, '<<<< like post');
    }
  },

}

})