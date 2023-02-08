<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from './stores/main';
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState(useMainStore, ['loggedIn'])
  },
}
</script>

<template>
  <div class="main-container bg-white">
    <Navbar 
      v-if="loggedIn"
    />
    <router-view/>
  </div>
</template>

