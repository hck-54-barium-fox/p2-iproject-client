import { defineStore } from 'pinia';
import axios from 'axios'
export const useAppStore = defineStore('app', {
    state: () => ({
        cat: [],
        isLogin: false,
        animals: [],
        products: [],
        checkout: [],
    }),
    getters: {

    },
    actions: {
        async searchCat(form) {
            console.log(form);
            try {
                const { data } = await axios({
                    method: 'get',
                    url: `http://localhost:3000/cat`,
                    params: {
                        name: form
                    }
                })

                this.cat = data
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "U sure that the correct cat name is entered?",
                  })
            }
        },
        async login(form) {
            try {
                console.log(form);
                const { data } = await axios({
                    method: 'post',
                    url: "http://localhost:3000/login",
                    data: form
                })
                console.log(data);
                localStorage.setItem('access_token', data.token)
                this.isLogin = true
                this.router.push('/')
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.name,
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        },
        async register(form){
            try {  
                const {data}= await axios({
                    method:'post',
                    url:'http://localhost:3000/register',
                    data:form
                })
                Swal.fire({
                    icon: 'success',
                    text: "Register Successfully",
                  })
                  this.router.push('/login')
            } catch (error) {
                console.log(error);
                if(error.response){
                    if(error.response.data[0].message){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data[0].message,
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data.required,
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    }
                }
            }
         },
        async logout() {
            localStorage.removeItem('access_token');
            this.isLogin = false;
            this.router.push('/login')
        },
        async searchAnimal(form) {
            try {
                console.log(form)
                const { data } = await axios({
                    methods: 'get',
                    url: 'http://localhost:3000/animal',
                    params: { name: form }
                })
                console.log(data);
                this.animals = data


            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "U sure That's the correct animal?",
                  })
                
            }
        },
        async fetchProduct() {
            try {
                const { data } = await axios({
                    method: "get",
                    url: "http://localhost:3000/product",
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.products = data
            } catch (error) {
                console.log(error);
            }
        },
        async buyProduct(id) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: `http://localhost:3000/pub/product/buy/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.router.push('/checkout')
            } catch (error) {
                console.log(error);
            }
        },
        async fetchCheckout() {
            try {
                console.log("masok");
                const { data } = await axios({
                    method: 'get',
                    url: `http://localhost:3000/pub/checkout`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.checkout = data
            } catch (error) {
                console.log(error);
            }
        },
        async deleteCheckout(id) {
            try {
                const { data } = await axios({
                    method: 'delete',
                    url: `http://localhost:3000/pub/checkout/delete/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.fetchCheckout()
            } catch (error) {
                console.log(error);
            }
        },
        async paid(id) {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: `http://localhost:3000/pub/paid/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.fetchCheckout()
                this.router.push('/store')
            } catch (error) {
                console.log(error);
            }
        },
        async buy(id) {
            try {
                console.log(id);
                const { data } = await axios({
                    method: 'post',
                    url: 'http://localhost:3000/pub/buy/midtrans',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                const cb = this.paid
                const fetch = this.fetchCheckout
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        //   alert("payment success!"); console.log(result);
                        cb(id)
                        fetch()
                    },
                })
            } catch (error) {
                console.log(error);
            }


        }
    },
});
