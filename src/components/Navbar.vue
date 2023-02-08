<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "NavbarView",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useAppStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAppStore, ["doLogout"]),

    handelLogout() {
      this.doLogout();
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Barium.Box</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/"
              >Home
              <span class="visually-hidden">(current)</span>
            </RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin">
            <RouterLink class="nav-link" to="/myprofile">My Profile</RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin">
            <RouterLink class="nav-link" to="/mycart">My Cart</RouterLink>
          </li>
        </ul>
        <div class="d-flex flex-column flex-lg-row gap-2">
          <RouterLink
            v-if="!isLogin"
            class="btn btn-outline-dark text-white"
            to="/login"
            >Login</RouterLink
          >
          <RouterLink
            v-if="!isLogin"
            class="btn btn-outline-dark text-white"
            to="/register"
            >Register</RouterLink
          >
          <button
            v-if="isLogin"
            @click.prevent="handelLogout"
            class="btn btn-outline-dark text-white"
            to="/"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
