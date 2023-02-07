<script>
import Navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapWritableState } from "pinia";
import { useAppStore } from "./stores/appStore";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapWritableState(useAppStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAppStore, ["isLoginToggle"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<template>
  <Navbar />

  <router-view></router-view>
</template>

<style></style>
