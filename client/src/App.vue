<script>
import { mapWritableState } from "pinia";
import { useAppStore } from "./stores/app";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapWritableState(useAppStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },

};
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>