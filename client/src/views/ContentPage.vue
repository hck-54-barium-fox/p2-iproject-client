<script>
import { mapState } from "pinia";
import { useAppStore } from "../stores/app";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  computed: {
    ...mapState(useAppStore, ["recipes", "fetchRecipe"]),
  },
  created() {
    this.fetchRecipe(this.$route.query.searchFood);
  },
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <span class="flex font-semibold text-2xl">All Result</span>
    <div class="grid grid-cols-3 gap-5 rounded-lg">
      <!-- Card -->
      <Card v-for="recipe in recipes" :key="recipe" :recipe="recipe" />
    </div>
  </div>
</template>
