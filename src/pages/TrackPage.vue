<script>
import TrackPage from '../components/TrackTable.vue'

export default {
  components: {
    TrackPage
  }
}
</script>

<template>
  <div class="third-main-page flex flex-col justify-center items-center px-4 py-8">
    <p class="text-white font-bold text-[3rem] border-b-4 mb-4 italic">Tracks of ""</p>
    <!-- TRACK AREA -->
    <div class="playlist-area w-[70%] bg-green-400 p-4 flex justify-center items-center gap-8 flex-wrap">
      <!-- PLAYLIST CARD -->
      <TrackPage/>
    </div>
  </div>
</template>