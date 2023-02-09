<script>
import Navbar from './components/Navbar.vue'
import Ftr from './components/Ftr.vue'
import ShareBtn from './components/ShareBtn.vue'
export default {
  components: {
    Navbar,
    Ftr,
    ShareBtn
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