<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import CardContent from "../components/CardContent.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    Navbar,
    Sidebar,
    CardContent,
  },
  computed: {
    ...mapState(useCounterStore, ["data"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["jadwalMajelis", "jadwalSholat"]),
  },
  created() {
    this.jadwalMajelis();
    this.jadwalSholat();
  },
};
</script>

<template>
  <Navbar />
  
    <div class="flex">
      <div class=" w-2/12">
        <Sidebar />
      </div>
      <div class="container grid grid-cols-3 w-4/6">
        <CardContent v-for="el in data.jadwalMajelis" :key="el.id" :el="el" />
      </div>
    </div>
  
</template>

<!-- v-for="post in allData.post" :key="post.id" :post="post" -->
