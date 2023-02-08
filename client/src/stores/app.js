import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const url = 'http://localhost:3000/'
import axios from 'axios'

export const useAppStore = defineStore('app', {
      state(){
        return{
          isAuth: false,
          products: [],
          mycart:[],
          cartTotalAmount: 0,
          cities:[],
          fee:0,
        }
      },
      actions:{
        checkAuth(){
          this.isAuth = !!localStorage.getItem('access_token')
        },
        async register(form){
          try{
            const { data } = await axios({
              method: 'POST',
              url: `${url}register`,
              data : form
            })
            this.$router.push('/login')
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your account has been registered',
              showConfirmButton: false,
              timer: 1500
            })
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })

          }
        },
        
        async login(form){
          try{
            const { data } = await axios({
              method: 'POST',
              url:`${url}login`,
              data:form
            })
            localStorage.setItem('access_token', data.access_token)
            this.isAuth = true
            this.$router.push('/')
            Swal.fire({
              icon: 'success',
              title: 'Login Succeed',
              showConfirmButton: false,
              timer: 2000
          })
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },

        async logout(){
          try{
            localStorage.clear()
            this.checkAuth()
            this.$router.push('/')
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },

        async fetchProducts(){
          try{
            const { data } = await axios({
              methods:'GET',
              url:`${url}products`,
              // headers:{
              //   access_token: localStorage.getItem('access_token')
              // }
            })
            // console.log(data, "INI DATA BRO");
            this.products = data
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },

        async addCart(ProductId, product_api_url){
          try{
            const { data } = await axios({
              method:'POST',
              url:`${url}products/${ProductId}`,
              data:{
                product_api_url
              },
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            Swal.fire({
              icon: 'success',
              title: `Success add to cart`,
              showConfirmButton: false,
              timer: 2000
            })
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },
        async fetchMyCart(){
          try{
            const { data } = await axios({
              method: 'GET',
              url: `${url}mycart`,
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            this.mycart = data
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },

        async paid(){
          try{
            const { data } = await axios({
              method: 'PATCH',
              url:`${url}checkout`,
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            this.fetchMyCart()
            this.$router.push('/')
           
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },
        async checkout(){
          try{
            const { data } = await axios({
              method:'POST',
              url: `${url}generate-midtrans-token?amount=${this.cartTotalAmount+this.fee}`,
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            const cb = this.paid

            window.snap.pay(data.token, {
              onSuccess: function(result) {
                cb()
              }
            })
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },
        async removeItem(id){
          try{
            const { data } = await axios({
              method: 'DELETE',
              url: `${url}mycart/${id}`,
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            this.fetchMyCart()
          } catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },

        async selectCity(){
          try{
            const { data } = await axios({
              method: 'GET',
              url:`${url}delivery/cities`,
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            this.cities = data.rajaongkir.results
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }
        },

        async deliveryFee(query){
          try{
            const { data } = await axios({
              method: 'POST',
              url:`${url}delivery/fee?destination=${query}`,
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
            this.fee = Math.round(+data/15000)
          }
          catch(err){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              // text: `${err.response.data.message}`,
           })
          }

        }

      }
  })

