<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <span class="flex font-semibold text-2xl">All Result</span>
    <div class="grid grid-cols-3 gap-5 rounded-lg">
      <!-- Card -->
      <Card />
    </div>
  </div>
</template>
