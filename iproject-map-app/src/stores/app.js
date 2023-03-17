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
        async register(form){
            try {
                const registeredUser = await axios({
                    method: 'POST',
                    url: 'http://localhost:8000/register',
                    // url: 'https://iproject-map-app-production.up.railway.app/register',
                    data: form
                })

                localStorage.setItem('access_token', registeredUser.data.userData.token)
                localStorage.setItem('role', registeredUser.data.userData.role)

                this.loginStatus = !!localStorage.getItem('access_token')

                this.getLandmarks()
                this.getBookmarks()

                this.router.push('/map')

                toaster.show(registeredUser.data.message, {
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
        async login(form){
            console.log(form);
            try {
                const loggedInUser = await axios({
                    method: 'POST',
                    url: 'http://localhost:8000/login',
                    // url: 'https://iproject-map-app-production.up.railway.app/login',
                    data: form
                })

                localStorage.setItem('access_token', loggedInUser.data.userData.token)
                localStorage.setItem('role', loggedInUser.data.userData.role)

                this.loginStatus = !!localStorage.getItem('access_token')

                this.getLandmarks()
                this.getBookmarks()

                this.router.push('/map')

                toaster.show(loggedInUser.data.message, {
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
        async googleLogin(payload){
            try {
                const googleCred = await axios({
                    method: 'POST',
                    url: 'http://localhost:8000/google-login',
                    // url: 'https://iproject-map-app-production.up.railway.app/google-login',
                    headers: {
                        token: payload.credential
                    }
                })

                localStorage.setItem('access_token', googleCred.data.token)
                localStorage.setItem('role', googleCred.data.data.role)

                this.loginStatus = !!localStorage.getItem('access_token')

                this.getLandmarks()
                this.getBookmarks()

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
            const landmarksData = await axios.get('http://localhost:8000/landmarks', {
            // const landmarksData = await axios.get('https://iproject-map-app-production.up.railway.app/landmarks', {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })

            return new Promise((resolve, reject) => {
                try {
                    console.log(landmarksData.data.result);
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
        },
        async getLandmarkById(id){
            try {
                const landmarkInfo = await axios.get(`http://localhost:8000/landmarks/${id}`)
                // const landmarkInfo = await axios.get(`https://iproject-map-app-production.up.railway.app/landmarks/${id}`)
                
                this.landmarkById = landmarkInfo.data.data
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        async getLandmarkWeather(latitude, longitude){
            try {
                // const weatherData = await axios.get(`https://iproject-map-app-production.up.railway.app/weather?latitude=${latitude}&longitude=${longitude}`)
                const weatherData = await axios.get(`http://localhost:8000/weather?latitude=${latitude}&longitude=${longitude}`)

                this.landmarkByIdWeather = weatherData.data.thisWeek
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        async addLandmark(form, image){
            form.imageUrl = ''

            try {
                const landmarkImg = await axios({
                    method: 'POST',
                    url: 'http://localhost:8000/landmarkImg',
                    // url: 'https://iproject-map-app-production.up.railway.app/landmarkImg',
                    data: image,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                try {
                    form.imageUrl = landmarkImg.data.imgPath

                    const newLandmark = await axios({
                        method: 'POST',
                        url: 'http://localhost:8000/landmarks',
                        // url: 'https://iproject-map-app-production.up.railway.app/landmarks',
                        data: form,     
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
    
                    toaster.show(newLandmark.data.message, {
                        type: 'info',
                        position: 'top',
                        duration: 4000
                    })
    
                    this.getLandmarks()
    
                    this.router.push('/map')
                    
                } catch (error) {
                    toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
                }
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        async editLandmark(id, form, image){
            form.imageUrl = ''

            try {
                const landmarkImg = await axios({
                    method: 'POST',
                    url: 'http://localhost:8000/landmarkImg',
                    // url: 'https://iproject-map-app-production.up.railway.app/landmarkImg',
                    data: image,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                try {
                    form.imageUrl = landmarkImg.data.imgPath

                    const newLandmark = await axios({
                        method: 'PUT',
                        url: `http://localhost:8000/landmarks/${id}`,
                        // url: `https://iproject-map-app-production.up.railway.app/landmarks/${id}`,
                        data: form,     
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
    
                    toaster.show(newLandmark.data.message, {
                        type: 'info',
                        position: 'top',
                        duration: 4000
                    })
    
                    this.getLandmarks()
    
                    this.router.push('/map')
                    
                } catch (error) {
                    console.log(error);
                    toaster.show(error.response.data.message, {
                        type: 'error',
                        position: 'top',
                        duration: 4000
                    })
                }
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        async deleteLandmark(id){
            try {
                const { data } = await axios.delete(`http://localhost:8000/landmarks/${id}`, {
                // const { data } = await axios.delete(`https://iproject-map-app-production.up.railway.app/landmarks/${id}`, {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.getLandmarks()

                toaster.show(data.message, {
                    type: 'info',
                    position: 'top',
                    duration: 4000
                })

                this.router.replace('/map')
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        async getBookmarks(){
            try {
                // const bookmarksData = await axios.get('https://iproject-map-app-production.up.railway.app/bookmarks', {
                const bookmarksData = await axios.get('http://localhost:8000/bookmarks', {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.bookmarkList = bookmarksData.data.result
            } catch (error) {
                toaster.show(error.response.data.message, {
                    type: 'error',
                    position: 'top',
                    duration: 4000
                })
            }
        },
        async addBookmark(id){
            try {
                // const { data } = await axios.post(`https://iproject-map-app-production.up.railway.app/bookmarks/${id}`, null, {
                const { data } = await axios.post(`http://localhost:8000/bookmarks/${id}`, null, {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                toaster.show(data.message, {
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
        async deleteBookmark(id){
            try {
                const { data } = await axios.delete(`http://localhost:8000/bookmarks/${id}`, {
                // const { data } = await axios.delete(`https://iproject-map-app-production.up.railway.app/bookmarks/${id}`, {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                this.getBookmarks()

                toaster.show(data.message, {
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
        }
    }
})
