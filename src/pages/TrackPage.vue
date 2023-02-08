<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import TrackTable from '../components/TrackTable.vue'

export default {
  components: {
    TrackTable
  },
  computed: {
    ...mapState(useMainStore, ['specificPlaylistTitle','currentWeather'])
  },
  methods: {
    ...mapActions(useMainStore, [''])
  },
  created() {
    if(Object.keys(this.currentWeather).length === 0) {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="third-main-page flex flex-col justify-center items-center px-4 py-8 relative">
    <img 
      @click.prevent="$router.push('/playlists')"
      src="../assets/images/arrow-91-128.png"
      class="absolute top-[-25px] left-[10px] w-[50px] h-[50px] cursor-pointer hover:scale-110 transition-all"
    />
    <p class="text-theme_red font-bold text-[3rem] px-40 italic text-center">Tracks of</p>
    <p class="text-theme_red font-bold text-[3rem] border-b-4 border-red-300 mb-8 pb-4 px-40 italic text-center">" {{ specificPlaylistTitle }} "</p>
    <!-- TRACK AREA -->
    <div class="playlist-area w-[80%] p-4 flex justify-center items-center gap-8 flex-wrap">
      <!-- PLAYLIST CARD -->
      <TrackTable/>
    </div>
  </div>
</template>