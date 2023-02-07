
import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:7777'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      loggedIn: false,
      currentWeather: {}
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
    },

    async fetchWeather(lat, lon) {
      try {
        console.log(lat, lon, 'yang ini kan?');
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/main/weather`,
          data: {
            latitude: lat,
            longitude: lon
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.currentWeather = data
        console.log(data.weather[0].description, 'yg masuk ke AI');
        this.enhanceSearchQuery(data.weather[0].description)
      } catch (err) {
        console.log(err);
      }
    },

    async enhanceSearchQuery(query) {
      try {
        console.log(query, 'the query');
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/main/suggestAI`,
          data: {
            searchQuery: query,
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        
      }
    }
  }
})
