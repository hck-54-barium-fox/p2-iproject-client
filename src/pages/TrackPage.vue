<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import TrackTable from '../components/TrackTable.vue'

export default {
  components: {
    TrackTable
  },
  computed: {
    ...mapState(useMainStore, ['specificPlaylistTitle'])
  },
  methods: {
    ...mapActions(useMainStore, [''])
  }
}
</script>

<template>
  <div class="third-main-page flex flex-col justify-center items-center px-4 py-8">
    <p class="text-white font-bold text-[3rem] border-b-4 mb-8 italic">Tracks of " {{ specificPlaylistTitle }} "</p>
    <!-- TRACK AREA -->
    <div class="playlist-area w-[80%] p-4 flex justify-center items-center gap-8 flex-wrap">
      <!-- PLAYLIST CARD -->
      <TrackTable/>
    </div>
  </div>
</template>