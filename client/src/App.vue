<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapWritableState } from 'pinia';
import { useAppStore } from './stores/app';
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },

}

</script>

<template>
  <Navbar />
  <RouterView />
</template>
