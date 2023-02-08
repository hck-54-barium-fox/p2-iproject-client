<script>
import Navbar from './components/Navbar.vue'
import Ftr from './components/Ftr.vue'
import LoginPage from './views/LoginPage.vue'
export default {
  components: {
    Navbar,
    LoginPage,
    Ftr
  }
}
</script>

<template>
  <Navbar/>
  <LoginPage/>
  <router-view />
  <Ftr/>
</template>

<style>

</style>