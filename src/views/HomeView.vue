<script>
import CardProductComponent from "../components/CardProduct.vue";
import CarouselComponent from "../components/Carousel.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import PaginateComponent from "../components/Pagination.vue";

import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "HomeView",
  components: {
    CardProductComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    PaginateComponent,
  },
  data() {
    return {
      query: {
        page: 1,
        brand: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppStore, ["fetchProduct"]),
  },
  computed: {
    ...mapState(useAppStore, ["productList"]),
  },
  created() {
    this.fetchProduct(this.query);
  },
};
</script>

<template>
  <div class="flex-column justify-content-between">
    <NavbarComponent />
    <CarouselComponent />
    <main class="my-3">
      <div class="container-xxl">
        <div class="row m-auto">
          <CardProductComponent
            v-for="(el, idx) in productList.rows"
            :key="idx"
            :product="el"
          />
        </div>
        <div class="row mx-auto">
          <div class="col d-flex">
            <PaginateComponent :data="productList" />
          </div>
        </div>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
