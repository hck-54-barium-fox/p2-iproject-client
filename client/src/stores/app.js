import { defineStore } from "pinia";
import axios from 'axios'
const URL = 'http://localhost:2545'

export const useAppStore = defineStore('app',{
    state: () => ({
        isLogin: false,
        myCart: [],
        dataProduct:[],
        dataCPU: []
    }),
    getters: {},
    actions: {
        async doRegist(dataRegist) {
            try {
                const { data } = await axios({
                    method:'post',
                    url: `${URL}/register`,
                    data: dataRegist
                })
                // console.log(dataRegist);
                // localStorage.setItem('access_token')
                console.log(data);
                this.router.push('/login')
            } catch (error) {
                console.log(error);
            }
        },
        async doLogin(dataLogin) {
            try {
                const { data } = await axios({
                    method:'post',
                    url: `${URL}/login`,
                    data: dataLogin
                })
                console.log('post doLogin', data.access_token);
                localStorage.setItem('access_token', data.access_token)
                // localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                this.router.push('/')
            } catch (error) {
                console.log(error);
            }
        },
        doLogout(){
            localStorage.removeItem('access_token')
            this.router.push('/login')
            this.isLogin = false
        },
        async getAllData(){
            try {
                const { data } = await axios({
                    method:'get',
                    url: `${URL}/all`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data);
                this.dataProduct = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchCart() {
            try {
                const { data } = await axios({
                    method:'get',
                    url: `${URL}/cart`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data);
                this.myCart = data
            } catch (error) {
                console.log(error);
            }
        },
        async delCart() {
            try {
                const { data } = await axios({
                    method:'DELETE',
                    url: `${URL}/cart`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                // console.log(data);
                this.fetchCart()
            } catch (error) {
                console.log(error);
            }
        },
        async addCart(prodId) {
            try {
                // console.log(prodId);
                const { data } = await axios({
                    method:'post',
                    url: `${URL}/addcart/${prodId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data);
                this.fetchCart();
                this.router.push('/mycart')
            } catch (error) {
                console.log(error);
            }
        },
        async paymentMidtrans() {
            try {
                const {data} = await axios({
                    method:'post',
                    url: `${URL}/midtranstoken`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data);
                let token = data.token
                let goTo = this.router
                let del = this.delCart
                window.snap.pay(token, {
                    onSuccess: function(result){
                      /* You may add your own implementation here */
                      alert("payment success!"); console.log(result);
                      del()
                      goTo.push('/')
                    },
                    onPending: function(result){
                        /* You may add your own implementation here */
                        alert("wating your payment!"); console.log(result);
                    },
                    onError: function(result){
                        /* You may add your own implementation here */
                        alert("payment failed!"); console.log(result);
                        goTo.push('/mycart')
                    },
                    onClose: function(){
                        /* You may add your own implementation here */
                        alert('you closed the popup without finishing the payment');
                        goTo.push('/mycart')
                    }
                  })
            } catch (error) {
                console.log(error);
            }
        }
    }
})