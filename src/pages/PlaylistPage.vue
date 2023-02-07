<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import PlaylistCard from '../components/PlaylistCard.vue'


export default {
  components: {
    PlaylistCard
  },
  computed: {
    ...mapState(useMainStore, ['AIsuggestion','fetchedPlaylists', 'currentWeather']),
  },
  methods: {
    ...mapActions(useMainStore, ['fetchWeather', 'enhanceSearchQuery']),
    regenerate() {
      this.enhanceSearchQuery(this.currentWeather.weather[0].description)
    },
  },
  created() {
    if(Object.keys(this.currentWeather).length === 0) {
      this.$router.push('/')
    }
  }

}
</script>

<template>
  <div class="second-main-page flex flex-col justify-center items-center px-4 pb-8">
    <p class="text-white font-bold text-[3rem] border-b-4 mb-4 italic">Generated Playlists</p>
    <p class="text-white opacity-70 font-bold text-[1rem] mb-4 italic">Psst.. the AI suggested: " <span class="text-blue-200 text-[1.3rem]">{{ AIsuggestion }}</span> "</p>
    <div class="start-button">
      <button @click.prevent="regenerate" class="bg-theme_red px-4 p-2 my-6 text-[1.5rem] w-[15rem] rounded-3xl text-white font-semibold drop-shadow-2xl hover:scale-110 hover:bg-red-300 transition-all italic">REGENERATE!</button>
    </div>
    <!-- PLAYLIST AREA -->
    <div class="playlist-area w-full p-4 flex justify-center items-center gap-8 flex-wrap">
      <!-- PLAYLIST CARD -->
      <PlaylistCard
        v-for="pl in fetchedPlaylists"
        :pl="pl"
      />
      <p v-if="fetchedPlaylists.length === 0" class="text-white font-bold text-[2rem] mt-[10rem] opacity-70 italic">~ Uh oh, no playlist for you... click regenerate! ~</p>
    </div>
  </div>
</template>