<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import CardContent from "../components/CardContent.vue";

import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Banner from "../components/Banner.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    CardContent,
    Banner,
  },
  computed: {
    ...mapState(useCounterStore, ["data", "isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["jadwalMajelis", "jadwalSholat"]),
  },
  created() {
    this.jadwalMajelis();
    this.jadwalSholat();
    console.log(this.isLogin, '<<<<<<<< sini bos loginnya ');
  },
};
</script>

<template>
  <div class="flex">
    <div class="w-2/12">
      <Sidebar />
    </div>
    <div class="container  w-4/6">
      <div>
        <Banner />
      </div>
      <div class="grid grid-cols-3">
        <CardContent v-for="el in data.jadwalMajelis" :key="el.id" :el="el" />
      </div>
    </div>
  </div>
</template>

<!-- v-for="post in allData.post" :key="post.id" :post="post" -->
