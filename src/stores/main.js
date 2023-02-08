
import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:7777'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      loggedIn: false,
      currentWeather: {},
      AIsuggestion: '',
      isLoading: false,
      fetchedPlaylists: [],
      specificPlaylistTitle: '',
      trackExamples: []
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
        console.log('AI Response: ',data.response);
        this.AIsuggestion = data.response
        this.fetchUniquePlaylist(data.response)
      } catch (err) {
        console.log(err);
      }
    },

    async fetchUniquePlaylist(searchQuery) {
      try {
        console.log(searchQuery, 'the query');
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/main/playlist`,
          data: {
            searchQuery: searchQuery,
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data);
        this.fetchedPlaylists = data
        this.router.push('/playlists')
      } catch (err) {
        console.log(err);
      }
    },

    async fetchTracks(plName, url) {
      try {
        console.log('masuk sini ga', url);
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/main/tracks`,
          data: {
            url: url
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data, 'track data');
        this.specificPlaylistTitle = plName,
        this.trackExamples = data
        this.router.push('/tracks')
      } catch (err) {
        console.log(err);
      }
    }
  }
})
