<script>
import Navbar from './components/Navbar.vue'
import { mapWritableState } from 'pinia';
import { useAppStore } from './stores/app';
export default {
  components: {
    Navbar
  },
  computed: {
        ...mapWritableState(useAppStore, ["isLogin"])
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
<RouterView></RouterView>
  
</template>

<style scoped>

</style>
