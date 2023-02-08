<script>
import CardProductDetail from "../components/CardProductDetail.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "ProductDetailView",
  components: {
    CardProductDetail,
    NavbarComponent,
    FooterComponent,
  },
  methods : {
    ...mapActions(useAppStore, ['fetchProductById'])
  },
  computed: {
    ...mapState(useAppStore, ["productDetail"]),
  },
  created(){
    this.fetchProductById(this.$route.params.id)
  }
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <NavbarComponent />
    <main class="my-3">
      <div class="container-xxl">
        <div class="row m-auto">
          <CardProductDetail :productDetail="productDetail"/>
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
