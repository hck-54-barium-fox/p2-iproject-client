import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = "http://localhost:3000/";

export const useAppStore = defineStore('app', {
    state: () => ({
        isLogin: false,
        listShoes: [],
        listMyCart: [],
        listCities: [],
        ongkir: 0
    }),
    getters: {
        rupiahFormat(val) {
            return val.toLocaleString("id-ID")
        }
    },
    actions: {
        async doLogin(form) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}login`,
                    data: form
                })

                this.isLogin = true
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/')

                Swal.fire({
                    icon: 'success',
                    title: 'Success Login!',
                    showConfirmButton: false,
                    timer: 1500
                })

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async doRegister(form) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}register`,
                    data: form
                })

                this.router.push('/login')

                Swal.fire({
                    icon: 'success',
                    title: 'Success Register!',
                    showConfirmButton: false,
                    timer: 1500
                })

            } catch (error) {
                console.log(error.response.data);
            }
        },

        doLogout() {
            localStorage.clear()
            this.router.push('/login')
            this.isLogin = false

            Swal.fire({
                icon: 'success',
                title: "You're logged out!",
                showConfirmButton: false,
                timer: 1500
            })
        },

        async fetchShoes() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${BASE_URL}shoes`
                })
                this.listShoes = data

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async fetchMyCart() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${BASE_URL}mycart`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.listMyCart = data

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async addToCart(shoeId) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}mycart/${shoeId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token'),
                    }
                });
                this.router.push('/');

                Swal.fire({
                    icon: 'success',
                    title: 'Success Add to Cart!',
                    showConfirmButton: false,
                    timer: 1500
                })

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async fetchCities() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: 'https://api.rajaongkir.com/starter/city',
                    headers: {
                        key: '563ae86d45c1395b9ba944125ec69ce0'
                    }
                })
                this.listCities = data

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async checkOngkir(form) {
            try {
                const data = await axios({
                    method: 'POST',
                    url: `${BASE_URL}checkOngkir`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: form
                })
                // console.log(data.data.results[0].costs[1].cost[0].value);
                // this.ongkir = data.data.results[0].costs[1].cost[0].value

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async processPayment() {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `${BASE_URL}generate-midtrans-token`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Payment Received, Thank You!',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                })
            } catch (err) {
                console.log(err);
            }
        },

        async reduceCart(cartId) {
            try {
                const { data } = await axios({
                    method: 'PATCH',
                    url: `${BASE_URL}mycart/${cartId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token'),
                    }
                });
                this.fetchMyCart()

            } catch (error) {
                console.log(error.response.data);
            }
        }

    }
})