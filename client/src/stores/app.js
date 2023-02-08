import { defineStore } from "pinia";
import axios from 'axios'
const server = 'http://localhost:4000'

export const useAppStore = defineStore('app', {
    state : ()=>({
            products : []
    }),
    getters : {},
    actions : {

        async doRegister(payload){
            try {
                console.log(payload)

                let {data} = await axios({
                    method : 'post',
                    url : `${server}/register`,
                    data  : payload
                })
                // console.log(data)
                // console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Good Job!",
                    text: "Now you can login to your account",
                  });
                  this.router.push("/login");
            } catch (error) {
                // console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                    footer: "Try Again :)",
                  });
            }
        },

        async doLogin(payload){
            try {
                console.log(payload, 'PAYLOAD LOGIN')
                let {data} = await axios({
                    method : 'post',
                    url: `${server}/login`,
                    data : payload
                })
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/')
                console.log(data.access_token, 'INI ACC TOKEN')
            } catch (error) {
                // console.log(error, 'ERRR LOGIN')
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                    footer: "Try Again :)",
                  });
            }
        },

        async fetchProduct(){
            try {
                let {data} = await axios({
                    method : 'get',
                    url :  `${server}/products`,
                    headers : {
                        access_token : localStorage.getItem('access_token')
                    }
                })

                console.log(data, 'INI DATA')
                this.products = data
            } catch (error) {
                console.log(error)
            }
        }
    }

})

