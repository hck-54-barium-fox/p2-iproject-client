import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// const url = 'http://localhost:1812'
const url ='https://iproject-wantauu-production.up.railway.app'


export const useAppStore = defineStore('app', {

    state: () => ({

        isLogin: false,
        games: [],
        newsGame: [],
        userLogin: '',
        gamesById: '',
        gamesNewsById: ''

        // statusGa:true,

    }),
    getters: {},
    actions: {
        async doLogin(form) {
            try {
                console.log(form, 'iniii');
                let { data } = await axios({
                    method: "POST",
                    url: `${url}/login`,
                    data: form
                })
                console.log(data, "ini token");
                localStorage.setItem('access_token', data.access_token)

                this.isLogin = true
                this.router.push('/home')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sucess Login',
                    showConfirmButton: false,
                    timer: 1500
                })
            } catch (err) {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: `Status ${err.request.status}`,
                    text: err.response.data.message,
                })
            }
        },
        doLogout() {
            localStorage.removeItem('access_token')

            this.isLogin = false
            this.router.push('/login')
        },
        async profile() {
            try {
                let { data } = await axios({
                    method: "GET",
                    url: `${url}/profile`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }

                })
                this.userLogin = data
            } catch (err) {
                console.log(err);
            }
        },
        async fetchGames() {
            try {
                let { data } = await axios({
                    method: "GET",
                    url: `${url}/games`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.games = data

            } catch (err) {
                console.log(err);
            }
        },
        async register(form) {
            try {
                let { data } = await axios({
                    method: "POST",
                    url: `${url}/register`,
                    data: form
                })

                console.log(this.mailer());
                this.router.push('/login')
                Swal.fire(
                    'Sucess Register'
                )
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: err.request.status,
                    text: err.response.data.message,
                })
                console.log(err);

            }
        },
        async fetchNewsTechnlogies() {
            try {
                let { data } = await axios({
                    method: "GET",
                    url: `${url}/newsTechnlogies`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.newsGame = data
            } catch (err) {
                console.log(err);
            }
        },
        async paid() {
            try {
                console.log("masuk paid");
                const { data } = await axios({
                    method: "POST",
                    url: `${url}/generateMitransToken`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data, "inii token");
                window.snap.pay(data.token, {
                    onSuccess: async function (result) {
                        /* You may add your own implementation here */
                        
                        //
                        const { data } = await axios({
                            method: "Patch",
                            url: `${url}/updatePaid`,
                            headers: {
                                access_token: localStorage.getItem('access_token')
                            }
                        })
                        this.profile()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Success payment ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
    
            } catch (err) {
                console.log(err);
            }
        },

        async mailer(email) {
            try {
                let { data } = await axios({
                    method: "POST",
                    url: `${url}/sendmailRegister`,
                    data: {
                        email: email
                    }
                })
                console.log(data, "ini mailer");
            } catch (err) {
                console.log();
            }
        },
        async fetchGamesById(steam_appid) {
            try {
                // /games/:id
                console.log('data');
                let { data } = await axios({
                    method: "GET",
                    url: `${url}/games/${steam_appid}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.gamesById = data

            } catch (err) {
                console.log(err);
            }
        },

        async fetchNewsTechnlogiesById(id) {
            try {
                // /newsTechnlogies/:id
                console.log('sini bo');
                let { data } = await axios({
                    method: 'GET',
                    url: `${url}/newsTechnlogies/${id}`,
                    headers: {
                         access_token: localStorage.getItem('access_token')
                    }
                })
                this.gamesNewsById = data
            } catch (err) {
                console.log(err);
            }
        }

    }

}
)
