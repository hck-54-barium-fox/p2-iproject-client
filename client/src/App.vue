<script>
import Navbar from './components/Navbar.vue'
import Ftr from './components/Ftr.vue'
export default {
  components: {
    Navbar,
    Ftr
  }
}
</script>

<template>
  <Navbar/>
  <router-view />
  <Ftr/>
</template>

<style>

</style>