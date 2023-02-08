<script>
import { mapWritableState } from "pinia";
import { useAppStore } from "./stores/app";
export default {
  computed: {
    ...mapWritableState(useAppStore, ["isLogin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin === true;
    } else {
      this.isLogin === false;
    }
  },
};
</script>

<template>
  <router-view></router-view>
</template>
