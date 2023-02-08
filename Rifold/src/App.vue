<script>
import { mapState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useAppStore } from './stores/app';


export default {
  components : {
    Navbar
  },
  computed: {
    ...mapState(useAppStore,['isLogin'])
  },
  created () {
    this.isLogin = localStorage.acesss_token
  }
}
</script>

<template>
<Navbar/>
<RouterView />
</template>

