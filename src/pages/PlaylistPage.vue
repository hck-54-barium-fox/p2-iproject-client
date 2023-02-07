<script>
import PlaylistCard from '../components/PlaylistCard.vue'

export default {
  components: {
    PlaylistCard
  }
}
</script>

<template>
  <div class="second-main-page flex flex-col justify-center items-center px-4 pb-8">
    <p class="text-white font-bold text-[3rem] border-b-4 mb-4 italic">Generated Playlists</p>
    <!-- PLAYLIST AREA -->
    <div class="playlist-area w-full p-4 flex justify-center items-center gap-8 flex-wrap">
      <div class="title">
      </div>
      <!-- PLAYLIST CARD -->
      <PlaylistCard
        v-for="i in 10"
      />
    </div>
  </div>
</template>