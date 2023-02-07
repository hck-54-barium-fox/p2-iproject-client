<script>
import PlaylistCard from '../components/PlaylistCard.vue'

export default {
  components: {
    PlaylistCard
  }
}
</script>

<template>
  <div class="first-main-page h-[100vh] bg-theme_red flex flex-col justify-center items-center px-4">
    <div class="click"></div>
    <div class="start-button">
      <button class="bg-theme_red px-4 py-2 text-[2rem] w-[10rem] rounded-3xl text-white font-semibold shadow-xl hover:scale-110 hover:bg-red-300 transition-all italic">START</button>
    </div>
  </div>
</template>

