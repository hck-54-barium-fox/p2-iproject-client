<script >
import { mapActions, mapState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import useAppStore from './stores/app'

export default{
  components:{
    Navbar
  },
  computed:{
    ...mapState(useAppStore, ['isAuth'])
  }
}
</script>

<template>
  <RouterView />
</template>

