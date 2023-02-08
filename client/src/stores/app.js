import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = "http://localhost:3000/";

export const useAppStore = defineStore('app', {
    state: () => ({}),
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

            } catch (error) {
                console.log(error.response.data);
            }
        },

        doLogout() {
            localStorage.clear()
            this.router.push('/login')
            this.isLogin = false
        }

    }
})