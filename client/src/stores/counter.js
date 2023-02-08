import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state(){
    return {
      server: 'http://localhost:3000',
      isLogin: false,
      quote: []
    }
  },
  actions: {
    async registerHandler(form){ 
      console.log(form)     
      try {
        const {data} = await axios({
          method: 'post',
          url: `${this.server}/register`,
          data: form
        })
        // console.log(data, '<<<<< ')
        this.router.replace({name: 'home'})        
      } catch (err) {
        console.log(err)
      }
    },

    async login(form){
      try {
        const {data} = await axios({
          method: 'post',
          url: `${this.server}/login`,
          data: form
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    },

    logout(){
      localStorage.clear('access_token')
      this.isLogin = false
      this.router.replace('/')     
    },

    async changeBuyStatus(){
      try {
        const {data} = await axios({
          method: 'patch',
          url: `${this.server}/buy-invitation`,
          headers: {access_token: localStorage.access_token}
        })
      } catch (err) {
        console.log(err)
      }
    },

    async buy(){
      try {
        const {data} = await axios({
          method: 'post',
          url: `${this.server}/generate-midtrans-token`,
          headers: {access_token: localStorage.access_token}
        })

        const cb = this.changeBuyStatus

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            cb()
            alert("payment success!"); console.log(result);
          },
          // onPending: function(result){
          //   /* You may add your own implementation here */
          //   alert("wating your payment!"); console.log(result);
          // },
          // onError: function(result){
          //   /* You may add your own implementation here */
          //   alert("payment failed!"); console.log(result);
          // },
          // onClose: function(){
          //   /* You may add your own implementation here */
          //   alert('you closed the popup without finishing the payment');
          // }
        })
      } catch (err) {
        console.log(err)
      }
    },

    async generateQuotes(){
      try {
        const {data} = await axios.get('http://localhost:3000/generatequotes')
        this.quote = data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
