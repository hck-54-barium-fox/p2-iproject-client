import { defineStore } from 'pinia'
import { createToaster } from '@meforma/vue-toaster'
import axios from 'axios'

const toaster = createToaster()

export const useAppStore = defineStore('app', {
    states: {
        landmarkList: [],
        landmarkById: {},
        landmarkByIdWeather: [],
        bookmarkList: [],
        loginStatus: !!localStorage.getItem('access_token')
    },
    getters: {},
    actions: {
        async googleLogin(payload){
            try {
                const googleCred = await axios({
                    method: 'POST',
                    // url: 'http://localhost:8000/google-login',
                    url: 'https://iproject-map-app-production.up.railway.app/google-login',
                    headers: {
                        token: payload.credential
                    }
                })

                localStorage.setItem('access_token', googleCred.data.token)
                localStorage.setItem('role', googleCred.data.data.role)

                this.loginStatus = !!localStorage.getItem('access_token')

                this.getLandmarks()

                this.router.push('/map')

                toaster.show(googleCred.data.message, {
                    type: 'info',
                    position: 'top',
                    duration: 4000
                })
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        logout(){
            localStorage.removeItem('role')
            localStorage.removeItem('access_token')

            this.loginStatus = false

            this.router.replace('/login')
        },
        async getLandmarks(){
            // const landmarksData = await axios.get('http://localhost:8000/landmarks', {
            const landmarksData = await axios.get('https://iproject-map-app-production.up.railway.app/landmarks', {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })

            return new Promise((resolve, reject) => {
                try {
                    this.landmarkList = landmarksData.data.result
                    resolve()
                } catch (error) {
                    toaster.show(error.response.data.message, {
                        type: 'error',
                        position: 'top',
                        duration: 4000
                    })
                    reject(error)
                }
            })
        }
    }
})
