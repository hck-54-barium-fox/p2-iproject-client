<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import PlaylistCard from '../components/PlaylistCard.vue'

export default {
  components: {
    PlaylistCard
  },
  computed: {
    ...mapState(useMainStore, ['isLoading','loggedIn',]),
    ...mapWritableState(useMainStore, ['loggedIn', 'spotifyUser'])
  },
  methods: {
    ...mapActions(useMainStore, ['fetchWeather']),
    success(pos) {
      const crd = pos.coords;
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      this.fetchWeather(crd.latitude, crd.longitude)
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    weather() {
      navigator.geolocation.getCurrentPosition(this.success, this.error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
    }
  },
  created() {
    if(!localStorage.getItem('access_token')) {
      this.loggedIn = false
      this.$router.push('/login')
    } else {
      this.loggedIn = true
      if(localStorage.getItem('spotify_token')) {
        this.spotifyUser = true
      }
    }
  },

  watch: {
    isLoading() {
      this.isLoading
    }
  }
}
</script>

<template>
  <div class="first-main-page h-[91vh] bg-white flex flex-col justify-center items-center px-4 rounded-[2rem]">
    <div class="click"></div>
    <div class="start-button">
      <button @click.prevent="weather" class="bg-theme_red px-4 py-2 text-[2rem] w-[10rem] rounded-3xl text-white font-semibold shadow-xl hover:scale-110 hover:bg-red-300 transition-all italic">START</button>
      <div v-if="isLoading" class="animation">
        ANIMASI LOADING
      </div>
    </div>
  </div>
</template>

