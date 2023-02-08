import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL = "http://localhost:3000"


export const useAppStore = defineStore('app', ({
  state: () => ({
    usersBmi: {},
    bodyPartList: []
  }),
  getters: {},
  actions: {
    async doLogin(form) {
      try {
        console.log(form)
        const { data } = await axios({
          method: 'post',
          url: `${URL}/login`,
          data: form
        })
        localStorage.setItem('access_token', data.token)
        this.router.push('/home')
      } catch (error) {
        console.log(error)
      }
    },
    async doRegister(form) {
      try {
        const data = await axios({
          method: 'post',
          url: `${URL}/register`,
          data: form
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
  
}))
