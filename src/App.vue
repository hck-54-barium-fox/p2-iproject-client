<script>
import { mapActions } from "pinia";
import { RouterView } from "vue-router";
import { useAppStore } from "./stores/app";

export default {
  name: "AppView",
  components: {
    RouterView,
  },
  methods: {
    ...mapActions(useAppStore, ["getMyProfile"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.getMyProfile();
    }
  },
};
</script>

<template>
  <RouterView />
</template>
