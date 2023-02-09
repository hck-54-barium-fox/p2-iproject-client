import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'https://projecttheflix-production.up.railway.app'

export const useCustomerStore = defineStore('customer', {
    state : ()=> ({
        movies : [],
        trending : [],
        totalPage : 0,
        moviesThend : [],
        detailMovie : {},
        trailer : '',
        isLogin :false
    }),
    getters : {},
    actions : {
        async loginCustomers(form){
            try {
                const { data } = await axios({
                    method : 'POST',
                    url : `${url}/login`,
                    data : form
                })
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/')
                this.isLogin = true
            } catch (error) {
                
            }
        },
        async fecthMovies(payload){
            try {
                let option;
                if(payload.page){
                    option = `page=${payload.page}`
                }
                if(payload.search){
                    option = `&search=${payload.search}`
                }
                console.log(option,'<<<option');
                console.log(payload);
                const { data } = await axios({
                    method : 'GET',
                    url : `${url}/movies?${option}`,
                    headers : {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                console.log(data);
                this.movies = data.results
                this.totalPage = data.total_pages
            } catch (error) {
                
            }
        },
        async fecthMoviesTrend(){
            try {
                const { data } = await axios({
                    method : 'GET',
                    url : `${url}/movies/trend`,
                    headers : {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                this.moviesThend = data.results[0]
                this.trending = data.results
                console.log(this.trending);
            } catch (error) {
                
            }
        },
       async geMoviesById(idMovie){
        try {
            const { data } = await axios({
                method : 'GET',
                url : `${url}/movies/${idMovie}`,
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            this.detailMovie = data
            const { trailer } = await axios({
                method : 'GET',
                url : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${data.original_title}&type=video&key=AIzaSyBcMQDlmtRP4joXBAP99nxfzRJ11aFxims
                `
            })
            // console.log(trailer, '<<< ini trailer');
            this.trailer = trailer.items[0].id.videoId
        } catch (error) {
            
        }
       },
       async doRegister(form){
        try {
            console.log(form);
            const { data } = await axios({
                method : 'POST',
                url : `${url}/register`,
                data : form
            })
            this.router.push('/login')
            console.log(data);
        } catch (error) {
            console.log(error);
        }
       },

       async doLogout(){
        try {
            localStorage.removeItem('access_token')
            this.router.push('/login')
            this.isLogin = false
        } catch (error) {
            
        }
       }
        
    }
})
