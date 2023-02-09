<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapWritableState } from 'pinia';
import { useAppStore } from './stores/app';
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },

  computed: {
    ...mapWritableState(useAppStore, ['isLogin'])
  },

  created() {
    if (localStorage.access_token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}

</script>

<template>
  <Navbar />
  <RouterView />
</template>
