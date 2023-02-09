<script>
import FloatingNav from './components/FloatingNav.vue'

export default {
  components: {
    FloatingNav
  }
}
</script>

<template>
  <FloatingNav v-if="this.$route.path !== '/login' && this.$route.path !== '/register'" />
  <router-view></router-view>
  <!-- <RouterView /> -->
</template>
