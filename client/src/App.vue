<script>
  import { mapWritableState } from 'pinia';
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue'
  import { useCounterStore } from './stores/counter';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Navbar,
      Footer
    },
    computed: {
      ...mapWritableState(useCounterStore, ['isLogin'])
    },
    created() {
      if(localStorage.access_token){
        this.isLogin = true
      }
    }
  }
</script>

<template>
  <Navbar/>


  <RouterView />
  <Footer/>
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
