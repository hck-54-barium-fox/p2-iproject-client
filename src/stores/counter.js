import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


const BASE_URL = 'http://localhost:6060/users'
export const useCounterStore = defineStore('counter', {
  state: () => ({ 
  isLogin : false, 

  }),

  actions: {
    
    async handleLogin(input){
      try {
        const {data} = await axios({
          url: BASE_URL + '/login', 
          method: 'post', 
          data: input
        })
        this.router.push('/')
        localStorage.setItem('access_token', data.access_token)
        if(localStorage.access_token){
this.isLogin = true
        }

        console.log(data);
      } catch (err) {
        console.log(err, 'login');
      }
    }
  },
})