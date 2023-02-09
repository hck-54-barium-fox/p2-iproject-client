<script >
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Footer from '@/components/Footer.vue'
import { mapWritableState } from 'pinia';
import { useAppStore } from './stores/app';


export default {
  computed:{
    ...mapWritableState(useAppStore, ['isLogin']),

  },
components:{
  Navbar,
  Hero,
  Footer
},
 created(){
  if(localStorage.getItem('access_token')){
    this.isLogin=true
  }else{
    this.isLogin=false
  }
 }
}

</script>

<template>
   
  <!-- ======= Header ======= -->
  <Navbar v-if="this.isLogin===true" />


  <!-- ======= Hero Section ======= -->


  <main id="main">
    
    <!-- <About/>

    <Store/> -->
    
    <RouterView />
  </main><!-- End #main -->

  <!-- <Footer/> -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>

<style >

</style>
