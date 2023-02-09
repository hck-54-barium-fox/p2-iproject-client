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
      favData: "",
      likes: "",
      midToken: "",
    }
  }),

  actions: {


    logout() {
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
          // localStorage.removeItem('username')
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
    async favorite() {
      try {
        if (!localStorage.access_token) {
          // console.log('km harus login dulu');
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to Log in first! ',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {


          const { data } = await axios({
            metdhod: 'get',
            url: BASE_URL + '/events/favorite',
            headers: {
              access_token: localStorage.access_token
            }
          })
          // console.log(data[0].Likes, '<<<<<< data like1');
          // console.log(data.length, '<<<<<< data like2');
          this.favData = data.length
          this.likes = data
          console.log();
          this.router.push('/favorite')

        }
      } catch (err) {
        console.log(err, '>>>> er nih ka ');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "uh oh..",
          footer: '<a href="">Why do I have this issue?</a>'
        })

        // console.log(err, '<<<< fetc category');
      }
    },

    async sedekah() {
      console.log(localStorage.access_token, '<<<<< aces token ');
      if (!localStorage.access_token) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "you must login first..",
          footer: '<a href="">Why do I have this issue?</a>'
        })
      } else {



        let totalPembayaran = ""
        let categorySedekah = ""

        let dataSwal = await Swal.fire({
          title: 'Form Sedekah',
          html: `<input type="number" id="total" class="swal2-input" placeholder="Nominal Sedekah">

          <select name="category" id="category" class="swal2-select">
          <option value="" selected=false>--Sedekah Untuk--</option>
          <option value="Yatim">Yatim</option>
          <option value="Odot">Odot</option>
          <option value="Pembangunan">Pembangunan</option>
          <option value="Perjuangan Markaz">Perjuangan Markaz</option>
          <option value="lain-lain">lain-lain</option>
          </select>
            `,
          confirmButtonText: 'Submit',
          focusConfirm: false,
          preConfirm: () => {
            totalPembayaran = Swal.getPopup().querySelector('#total').value
            categorySedekah = Swal.getPopup().querySelector('#category').value
            if (!totalPembayaran || !categorySedekah) {
              Swal.showValidationMessage(`Please enter totalPembayaran and categorySedekah`)
            }
            return { totalPembayaran: totalPembayaran, categorySedekah: categorySedekah }
          }
        })
        console.log(dataSwal, '<<<<<');

        try {
          let { data } = await axios({
            method: 'post',
            url: 'http://localhost:6060/midtoken_generate',
            data: {
              totalPembayaran,
              categorySedekah
            },
            headers: {
              access_token: localStorage.access_token
            }
          })
          // this.data.midToken = data
          console.log(data, '<<<<< mid token coy');

          const dataDonatur = {
            token: data.mid_token,
            jumlah: totalPembayaran,
            category: categorySedekah
          }
          this.midTrans(dataDonatur)

        } catch (error) {
          console.log(error, 'sedekaaahhh');
        }
      }
      // console.log(data, '<<<<<');
      //   Swal.fire(`
      //     Login: ${result.value.login}
      //     Password: ${result.value.password}
      //   `.trim())
    },

    async midTrans(data) {
      try {
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `terimakaih sudah berpartisipasi, jazakumullohu khairon`,
              showConfirmButton: false,
              timer: 1500
            })
          },

        })
        const donatur = await axios({
          method: 'post',
          url: 'http://localhost:6060/donatur',
          data: {
            jumlah: data.jumlah,
            category: data.category
          },
          headers: {
            access_token: localStorage.access_token
          }
        })


        console.log(donatur, '<<<<< donatur');
      } catch (err) {
        console.log(err, 'err midtars bos');
      }
    }

  }
})

// Card Number	4811111111111114
// CVV	123
// Exp Month	Any month in MM format. For example, 02
// Exp Year	Any future year, in YYYY format. For example, 2025
// OTP/3DS	112233