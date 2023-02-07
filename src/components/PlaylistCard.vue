<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  props: ['pl'],
  methods: {
    ...mapActions(useMainStore, ['fetchWeather', 'enhanceSearchQuery', 'fetchTracks']),
    goToPage(url) {
      window.open(url, "_blank");
    },
    seeTracks(plName, url) {
      console.log('this invoked');
      this.fetchTracks(plName, url)
    }
    
  },
  computed: {
      getSummary() {
        return this.pl.playlist_title?.length > 28
          ? this.pl.playlist_title.substring(0, 28) + '...'
          : this.pl.playlist_title
      }
    }
}
</script>

<template>
  <div class="playlist-card w-[300px] flex flex-col justify-start">
    <div class="playlist-image overflow-hidden object-bottom rounded-t-xl w-[300px] h-[300px]">
      <img @click.prevent="goToPage(pl.playlist_link)" :src="pl.playlist_image" class=" object-cover h-[300px] w-[300px] cursor-pointer hover:scale-110 transition-all  " />
    </div>
    <div
      class="content-info w-full bg-white px-4 pb-4 pt-2 flex flex-col justify-center items-center rounded-b-xl shadow-2xl relative">
      <p class="playlist-title font-bold">{{ getSummary }}</p>
      <p class=" mb-4">by: {{ pl.playlist_owner }}</p>
      <button
        @click.prevent="seeTracks(pl.playlist_title, pl.playlist_tracks)"
        class=" bg-theme_red px-4 py-2 text-[1rem] w-auto rounded-3xl text-white font-semibold hover:scale-110 hover:bg-red-300 transition-all italic">See
        tracks</button>
    </div>
  </div>
</template>