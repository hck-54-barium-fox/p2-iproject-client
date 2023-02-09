<script>
import MyCartDetail from "../components/MyCartDetail.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "MyCartView",
  components: {
    MyCartDetail,
    NavbarComponent,
    FooterComponent,
  },

  methods: {
    ...mapActions(useAppStore, ["fetchBookmarkList"]),
  },
  computed: {
    ...mapState(useAppStore, ["bookMarkList"]),
  },

  created() {
    this.fetchBookmarkList();
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <NavbarComponent />
    <main class="my-3">
      <div class="container-xxl">
        <div class="row m-auto d-flex flex-column">
          <MyCartDetail
            v-for="el in bookMarkList"
            :key="el.id"
            :cartDetail="el"
          />
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
