<script>
import Navbar from "../components/Navbar.vue";
import { useAppStore } from "../stores/app";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
        event: ''
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useAppStore, ["listTaxonomies"]),
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useAppStore, ["fetchTaxonomies", "fetchEventDetail"]),
    searchEvent() {
        this.$router.push(`/event/${this.event}`)
    },

    searchByCategory(name) {
      this.$router.push(`/event/${name}`)
    }
  },

  created() {
    if (localStorage.getItem('access_token')) {
      this.fetchTaxonomies();
      this.isLogin = true
    } else {
      this.$router.push('/login')
    }
  },
};
</script>

<template>
  <div class="first-section">
    <Navbar />
    <div class="slogan-container">
      <div class="large-slogan">Let there be Live</div>
      <div class="small-slogan">Your next best-night-ever is waiting.</div>
      <div class="small-slogan">And we have the ticket.</div>
      <form @submit.prevent="searchEvent" class="search-container">
        <input
          class="search-button"
          v-model="event"
          type="text"
          placeholder="Search by team, artist, event, or venue"
        />
        <button type="submit" style="display: none">Enter</button>
      </form>
    </div>
  </div>

  <div class="second-section">
    <div class="category-section">
      <div class="category-title">Categories</div>
      <div class="category-card-container">
        <div
          class="category-card"
          v-for="taxonomy in listTaxonomies"
          :key="taxonomy.id"
        >
          <img @click.prevent="searchByCategory(taxonomy.name)" class="category-image" :src="taxonomy.image" alt="" />
          <div class="category-name">{{ taxonomy.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
