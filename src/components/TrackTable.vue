<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import TrackPage from '../components/TrackTable.vue'

export default {
  computed: {
    ...mapState(useMainStore, ['specificPlaylistTitle','trackExamples'])
  },
  methods: {
    ...mapActions(useMainStore, ['']),
    goToPage(url) {
      window.open(url, "_blank");
    },
  }
}
</script>

<template>
  <table class="w-full">
    <thead >
      <tr class="border text-white font-bold">
        <td class="p-2 border text-center w-[3%]">#</td>
        <td class="p-4 border w-[55%]">Track Name</td>
        <td class="p-4 border w-[30%]">Artist</td>
        <td class="p-4 border text-center">Album Cover</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="track, i in trackExamples" class="text-white">
        <td class="p-2 border text-center">#{{ i+1 }}</td>
        <td class="p-4 border "><a @click.prevent="goToPage(track.track_link)" class="cursor-pointer hover:font-bold transition-all">{{ track.track_name }}</a></td>
        <td class="p-4 border"><a @click.prevent="goToPage(track.artist_link)" class="cursor-pointer hover:font-bold transition-all">{{ track.track_artist }}</a></td>
        <td class="p-4 border w-[120px] self-center">
          <img :src="track.album_image" class="h-[100px] w-[100px] rounded-2xl"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>