<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/appStore";
export default {
  methods: {
    ...mapActions(useAppStore, ["doLogout"]),

    handleLogout() {
      this.doLogout();
    },
  },
  computed: {
    ...mapState(useAppStore, ["isLogin"]),
  },
};
</script>

<template>
  <header>
    <nav class="container-nav navbar-navv">
      <a href="#" class="nav-logo">PinPentul</a>

      <div class="nav-menu-wrap">
        <ul class="navbar-navv-menu mt-3">
          <a @click.prevent="$router.push(`/`)" href="#" class="nav-link-pin">Home</a>
          <a @click.prevent="$router.push(`/memes`)" href="#" class="nav-link-pin">Generate Meme</a>
          <!-- <a href="#" class="nav-link-pin">Categories</a> -->
          <a @click.prevent="handleLogout" href="#" class="nav-link-pin">Logout</a>
        </ul>
      </div>

      <div class="nav-menu-wrap">
        <ul class="navbar-navv-menu mt-3">
          <div class="nav-search">
            <a href="#" class="nav-link-pin"><i class="fas fa-search"></i></a>
          </div>
          <a href="#" class="nav-link-pin"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="nav-link-pin"><i class="fab fa-instagram"></i></a>
          <a href="#" class="nav-link-pin"><i class="fab fa-linkedin"></i></a>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* write your code here */

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:wght@400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* Warna Dasar */

:root {
  --light: #f8f9fa;
  --secondary: #adb5bd;
  --dark: #343a40;
  --primary-color: #f15bb5;
  --secondary-color: #2ec4b6;
  --border: #e9ecef;
}

body {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}

.container-nav {
  max-width: 1500px;
  padding: 0 15px;
  margin: auto;
}

a {
  text-decoration: none;
}

/* Header */
header {
  background-color: var(--light);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.navbar-navv {
  padding: 10px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
}

.nav-logo {
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 32px;
  position: relative;
  display: flex;
  align-self: center;
  color: var(--dark);
}

.nav-menu-wrap {
  align-self: center;
}

.nav-link-pin {
  margin: 18px;
  font-family: "Poppins", sans-serif;
  color: var(--dark);
}

.nav-link-pin:hover {
  color: var(--primary-color);
}

.nav-search {
  display: inline;
  border-right: 1px solid var(--secondary);
  margin-right: 10px;
  padding-right: 5px;
}

/* Blog */
#blog-main {
  margin-top: 3em;
}

.img {
  width: 100%;
  border-radius: 15px;
}

#posts {
  margin-bottom: 5em;
}

.grid {
  margin: 0 auto;
  column-count: 6;
}

.grid .grid-item {
  /* width: calc(15%); */
  margin-bottom: 1em;
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
}

.post-body {
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
}

.caption {
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 3px;
  color: var(--dark);
}

.time {
  font-family: "Poppins", sans-serif;
  color: var(--secondary);
  font-size: 12px;
  margin-top: 3px;
}

.icon-1 {
  color: var(--primary-color);
}

.done-btn {
  background-color: #d1fae5;
  color: #10b981;
}

.ongoing-btn {
  background-color: #e0e7ff;
  color: #6366f1;
}

.pending-btn {
  background-color: #ffe4e6;
  color: #f43f5e;
}
</style>
