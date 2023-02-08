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
  <table class="w-full rounded-2xl overflow-hidden divide-y-[2px] shadow-xl divide-white">
    <thead >
      <tr class=" bg-theme_red text-white font-bold divide-x-[2px] divide-white">
        <td class="p-[0.rem] border border-white text-center w-[3%]">#</td>
        <td class="p-[0.5rem] border border-white w-[55%]">Track Name</td>
        <td class="p-[0.5rem] border border-white w-[30%]">Artist</td>
        <td class="p-[0.5rem] border border-white text-center">Album Cover</td>
      </tr>
    </thead>
    <tbody class="text-theme_red divide-y-[2px] divide-theme_red">
      <tr v-for="track, i in trackExamples" class="text-theme_red divide-x-[2px] divide-theme_red ">
        <td class="p-[0.5rem] text-center">#{{ i+1 }}</td>
        <td class="p-[0.5rem] cursor-pointer hover:font-bold hover:text-[1.5rem] hover:bg-red-50 transition-all"><a @click.prevent="goToPage(track.track_link)" class=" flex flex-wrap">{{ track.track_name }}</a></td>
        <td class="p-[0.5rem] cursor-pointer hover:font-bold hover:text-[1.2rem] hover:bg-red-50 transition-all"><a @click.prevent="goToPage(track.artist_link)">{{ track.track_artist }}</a></td>
        <td class="p-[0.5rem] w-[120px] flex justify-center items-center">
          <img :src="track.album_image" class="h-[100px] w-[100px] rounded-2xl"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>