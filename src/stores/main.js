
import { defineStore } from 'pinia'
import axios from 'axios'

// const BASE_URL = 'http://localhost:7777' // DEV
const BASE_URL = 'https://chillclouds-ipro-production.up.railway.app' // PROD

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
          logo: 'clearsky-removebg-preview.png',
          displayName: 'Clear Sky'
        },
        cloud: {
          logo: 'clouds-2-128.png',
          displayName: 'Cloudy'
        },
        fog: {
          logo: 'fog-day-128.png',
          displayName: 'Hazy'
        },
        rain: {
          logo: 'rain-128.png',
          displayName: 'Rainy'
        },
        snow: {
          logo: 'snowflake-44-128.png',
          displayName: 'Snowy'
        },
        storm: {
          logo: 'storm-128.png',
          displayName: 'Storm'
        },
        sun: {
          logo: 'sun-128.png',
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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Register Successful!',
          showConfirmButton: false,
          timer: 1000
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data[0].error}`,
        })
      }
    },

    async doLogin(formData) {
      try {
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/users/login`,
          data: formData
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
      })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.router.push('/')

      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data[0].error}`,
        })
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
          localStorage.setItem('access_token', data.access_token)

          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Successful!',
              showConfirmButton: false,
              timer: 1500
          })
          this.router.push('/')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
      }
    },

    async doSpotifyLogin() {
      try {
        let {data} = await axios({
          method: 'get',
          url: `${BASE_URL}/users/spotify-request-auth`,
      })
        window.open(data.url, '_self')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
      }
    },

    async doSpotifyAuth(code) {
      try {
        let {data} = await axios({
          method: 'post',
          url: `${BASE_URL}/users/spotify-user-auth`,
          data: {
            code
          }
      })
        let spotifyToken = data.data.access_token
        localStorage.setItem('spotify_token', spotifyToken)
        this.spotifyGetMe(spotifyToken)
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.spotifyUser = true
        this.router.push('/')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
      }
    },

    doLogout() {
      localStorage.clear()
      this.$reset()
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
      }
    },

    async enhanceSearchQuery(query) {
      try {
        console.log('the query: ', query);
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
        console.log('AI Response: ', data.response);
        this.AIsuggestion = data.response
        this.fetchUniquePlaylist(data.response)
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
      }
    },

    async fetchTracks(plName, url) {
      try {

        let timerInterval
        Swal.fire({
          title: 'Fetching data...',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })

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
        this.specificPlaylistTitle = plName,
        this.trackExamples = data
        this.router.push('/tracks')
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something happened :(`,
        })
      }
    },

    async followPlaylist(trackId) {

    }

  }
})
