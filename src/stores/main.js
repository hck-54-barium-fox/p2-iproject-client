
import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:7777'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      loggedIn: false,
      spotifyUser: false,
      currentWeather: {},
      AIsuggestion: '',
      isLoading: false,
      fetchedPlaylists: [],
      specificPlaylistTitle: '',
      trackExamples: [],
      weatherInfo: {
        clear: {
          logo: 'src/assets/images/clearsky-removebg-preview.png',
          displayName: 'Clear Sky'
        },
        cloud: {
          logo: 'src/assets/images/clouds-2-128.png',
          displayName: 'Cloudy'
        },
        fog: {
          logo: 'src/assets/images/fog-day-128.png',
          displayName: 'Hazy'
        },
        rain: {
          logo: 'src/assets/images/rain-128.png',
          displayName: 'Rainy'
        },
        snow: {
          logo: 'src/assets/images/snowflake-44-128.png',
          displayName: 'Snowy'
        },
        storm: {
          logo: 'src/assets/images/storm-128.png',
          displayName: 'Storm'
        },
        sun: {
          logo: 'src/assets/images/sun-128.png',
          displayName: 'Sunny'
        },
      }
    }
  },

  getters: {

  },

  actions: {

    async doRegister(formData) {
      try {
          await axios({
          method: 'post',
          url: `${BASE_URL}/users/register`,
          data: formData
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err);
      }
    },

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

    async callback(res) {
      try {
          let {data} = await axios({
              method: 'post',
              url: `${BASE_URL}/users/google-login`,
              data: {
                  idToken: res.credential
              }
          })
          console.log(data, 'ini');
          localStorage.setItem('access_token', data.access_token)

          // Swal.fire({
          //     position: 'center',
          //     icon: 'success',
          //     title: 'Login Successful!',
          //     showConfirmButton: false,
          //     timer: 1500
          // })
          this.router.push('/')
      } catch (err) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: `${err.response.data.error}`,
        // })
      }
    },

    async doSpotifyLogin() {
      try {
        let {data} = await axios({
          method: 'get',
          url: `${BASE_URL}/users/spotify-login`,
      })
        window.open(data.url, '_self')
      } catch (err) {
        console.log(err);
      }
    },

    async doSpotifyAuth(code) {
      try {
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/users/spotify-login`,
          data: {
            code
          }
      })
        let spotifyToken = data.data.access_token
        localStorage.setItem('spotify_token', spotifyToken)
        this.spotifyGetMe(spotifyToken)
      } catch (err) {
        console.log(err);
      }
    },

    async spotifyGetMe(code) {
      try {
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/users/me`,
          data: {
            code
          }
      })
        let payload = {
          username: data.display_name,
          email: data.email,
          role: 'user'
        }
        this.spotifyFinalAuth(payload)
      } catch (err) {
        console.log(err);
      }
    },

    async spotifyFinalAuth(payload) {
      try {
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/users/loginOrRegister`,
          data: {
            payload
          }
      })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.spotifyUser = true
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
