import { defineStore } from "pinia"
import axios from "axios"
import Swal from "sweetalert2"
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
// let base_url = "http://localhost:3000"
let base_url = `https://solaris-production.up.railway.app`
export const useAppStore = defineStore("app", {
    state: () => ({
        planets: [],
        planetById: {},
        userStatus:"",
        apod : {}
    }),
    actions: {
        async login(payload) {
            try {
                let { data } = await axios({
                    method: "post",
                    url: `${base_url}/login`,
                    data: payload,
                })
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("status",data.status)
                this.router.push("/")
            } catch (err) {
                Toast.fire({
                icon: 'error',
                title: `${err.response.data.message}`
              })
                console.log(err)
            }
        },
        async fetchPlanet() {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `${base_url}/planets`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                })
                this.planets = data
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        },
        logout() {
            localStorage.removeItem("access_token")
            localStorage.removeItem("status")
            this.router.push("/login")
        },
        async registerUser(payload) {
            try {
                const { data } = await axios({
                    method: "post",
                    url: `${base_url}/register`,
                    data: payload,
                })
                this.router.push("/login")
                Toast.fire({
                    icon: 'success',
                    title: `Success Register`
                  })
            } catch (err) {
                Toast.fire({
                    icon: 'error',
                    title: `${err.response.data.message}`
                  })
            }
        },
        async fetchPlanetsById(id) {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `${base_url}/planets/${id}`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                })
                this.planetById = data
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        },
        async getTransaction() {
            try {
                const { data } = await axios({
                    method: "post",
                    url: `${base_url}/transaction`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                })
                console.log(data)
                let token = data.token
                let premium = this.subscribed
                let home = this.router
                window.snap.pay(token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        alert("payment success!")
                        localStorage.setItem("status","premium")
                        premium()
                        home.push("/")
                    },
                    onPending: function (result) {
                        /* You may add your own implementation here */
                        alert("wating your payment!")
                        console.log(result)
                    },
                    onError: function (result) {
                        /* You may add your own implementation here */
                        alert("payment failed!")
                        console.log(result)
                    }
                })
            } catch (err) {
                console.log(err)
            }
        },
        async subscribed() {
            try {
                const { data } = await axios({
                    method: "patch",
                    url: `${base_url}/subscribe`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                })
                this.userStatus = 'premium'
            } catch (err) {
                console.log(err)
            }
        },
        async fetchAPOD(){
            try {
                const {data} = await axios({
                    method:'get',
                    url:`${base_url}/apod`,
                    headers:{
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.apod = data
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters: {},
})
