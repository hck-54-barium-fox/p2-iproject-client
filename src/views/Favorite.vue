<script>
import { mapState } from "pinia";
import CardContent from "../components/CardContent.vue";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    CardContent,
  },
  computed: {
    ...mapState(useCounterStore, ["likes"]),
  },
};
</script>

<template>
  <div class="grid grid-cols-3">
    <CardContent v-for="el in likes" :key="el.id" :el="el" />
  </div>
</template>
