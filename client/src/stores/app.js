import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
// const baseUrl = "http://localhost:3000"
const baseUrl = `https://iproject-production-8b88.up.railway.app`

export const useAppStore = defineStore('app', {
    state: () => ({
        isLogin: false,
        weapons: [],
        detail: "",
        myWeapon: []

    }),

    getters: {

    },

    actions: {
        async login(form) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/user/login`,
                    data: form
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })
                this.router.push('/')
            } catch (err) {
                console.log(err.response.data);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid Email/Password!'
                  })
            }
        },

        async logout() {
            localStorage.removeItem("access_token")
            this.router.push('/login')
            Toast.fire({
                icon: 'success',
                title: 'Logout successfully'
            })
            this.isLogin = false
        },

        async fetchWeapon() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `${baseUrl}/weapons`
                })
                this.weapons = data
            } catch (err) {
                console.log(err.response.data);
            }
        },

        async weaponDetail(weaponId) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `${baseUrl}/weapons/${weaponId}`
                })
                this.detail = data
            } catch (err) {
                console.log(err.response.data);
            }
        },

        async addweapon(id) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/myWeapons/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.myWeapon = data
                Toast.fire({
                    icon: 'success',
                    title: 'Add to your Weapon'
                })
                this.router.push('/myWeapon')
            } catch (err) {
                console.log(err.response.data);
            }
        },

        async fetchMyWeapon() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${baseUrl}/myWeapons`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.myWeapon = data
            } catch (err) {
                console.log(err.response.data);
            }
        },

        async register(form) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/user/register`,
                    data: form
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Account Has been Created'
                })
                this.router.push('/login')
            } catch (err) {
                console.log(err.response.data);
                if(err.response.data.message === 'Internal server error'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already taken'
                      })
                }
            }

        },

        async removeWeapon(id) {
            try {
                const { data } = await axios({
                    method: "DELETE",
                    url: `${baseUrl}/myWeapons/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Remove Weapon'
                })
                this.fetchMyWeapon()
            } catch (err) {
                console.log(err.response.data);
            }
        },

        async payment(id) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/myWeapons/midtransToken/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                const cb = this.statusWeapon
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        cb(id)
                    }
                })
            } catch (err) {
                console.log(err.response.data);
            }
        },

        async statusWeapon(id) {
            try {
                const { data } = await axios({
                    method: 'PATCH',
                    url: `${baseUrl}/myWeapons/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.fetchMyWeapon()
            } catch (err) {
                console.log(err.response.data);
            }

        }

    }


})