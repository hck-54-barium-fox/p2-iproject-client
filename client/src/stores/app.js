import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const url = 'http://localhost:3000/'
import axios from 'axios'

export const useAppStore = defineStore('app', {
      state(){
        return{
          isAuth: false,
          products: []
        }
      },
      actions:{
        
        async register(form){
          try{
            const { data } = await axios({
              method: 'POST',
              url: `${url}register`,
              data : form
            })
            this.$router.push('/login')
          }
          catch(err){
            console.log(err, "INII");

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
            this.$router.push('/')
          }
          catch(err){
            console.log(err);
          }
        },

        async logout(){
          try{
            localStorage.clear()
          }
          catch(err){
            console.log(err);
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
            console.log(err);
          }
        }
      }
  })

