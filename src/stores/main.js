
import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:7777'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      loggedIn: false
    }
  },

  getters: {

  },

  actions: {
    async doLogin(formData) {
      try {
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/users/login`,
          data: formData
        })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.router.push('/')

      } catch (err) {
        console.log(err);
      }
    },

    doLogout() {
      localStorage.clear()
      this.loggedIn = false
      this.router.push('/login')
    }
  }
})
