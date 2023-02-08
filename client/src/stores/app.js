import { defineStore } from "pinia"
import axios from 'axios'
const baseUrl = "http://localhost:4000"
export const useAppStore = defineStore('app', {
    state: () => ({
        isLogin: false
    }),
    getters: {},
    actions: {
        async loginFacebook(response) {
            try {
                localStorage.access_token = response.authResponse.access_token
                this.isLogin = true
                this.router.push('/')
            } catch (error) {

            }
        },
        async doLoginGoogle(response) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/login-google`,
                    data: {
                        google_token: response.credential,
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('userName', data.userName)
                this.isLogin = true
                console.log(this.isLogin)
                console.log(data, `sksjsjsjsjsjsjjsjsjs DATA USER`)
                this.router.push('/')
                // console.log(localStorage)
                Swal.fire({
                    icon: "success",
                    title: "Success Login",
                    text: `hello ${data.userName}`,
                });
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Failed to login",
                    text: `${error.response.data.message}`,
                });
            }
        },
        async doLogin(form) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/login`,
                    data: { email: form.email, password: form.password }
                })
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/')
                this.isLogin = true
                Swal.fire({
                    icon: "success",
                    title: "Success Login",
                    text: `hello`,
                });
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "failed login Login",
                    text: `${error.response.data}`,
                });
            }
        },
        async doRegister(form) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `${baseUrl}/register`,
                    data: form
                })
                Swal.fire({
                    icon: "success",
                    title: "Success Register",
                    text: `Account has been created`,
                });
                this.router.push('/login')
            } catch (error) {
                console.log(error)
                let message = error.response.data.map((perData) => {
                    return perData.error;
                });
                console.log(message);
                Swal.fire({
                    icon: "error",
                    title: "Failed Register Account",
                    text: `${message.join(", ")}`,
                });
            }
        },
        doLogout() {
            localStorage.removeItem('access_token')
            this.router.replace('/login')
            this.isLogin = false
            Swal.fire({
                icon: "success",
                title: "success log out",
                text: `goodbye`,
            });
        }
    }
})
