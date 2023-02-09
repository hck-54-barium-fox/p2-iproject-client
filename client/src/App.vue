<script>
import Navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapWritableState } from "pinia";
import { useAppStore } from "./stores/appStore";
import PreLoader from "../src/components/PreLoader.vue";
export default {
  components: {
    Navbar,
    PreLoader,
  },
  computed: {
    ...mapWritableState(useAppStore, ["activePreLoader"]),
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
  <!-- <Navbar /> -->
  <PreLoader v-if="this.activePreLoader" />
  <router-view></router-view>
</template>

<style></style>
