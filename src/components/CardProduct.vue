<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useAppStore } from "../stores/app";
export default {
  name: "CardProduct",
  components: {
    RouterLink,
  },
  props: ["product"],
  computed: {
    ...mapState(useAppStore, ["isLogin"]),

    getRupiah() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.product.product_price);
    },
  },
  methods: {
    ...mapActions(useAppStore, ["addBookmark"]),

    addBookmarkByProductId(id) {
      this.addBookmark(id);
    },
  },
};
</script>

<template>
  <!-- <div class="row"> -->
  <div class="col col-sm-6 col-md-4 p-1">
    <div class="card">
      <img :src="product.product_image_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.product_name }}</h5>
        <p class="card-text">Stock : {{ product.product_info }}</p>
        <p>Price : {{ getRupiah }}</p>
        <div class="d-flex flex-column justify-content-center gap-2">
          <RouterLink :to="`/products/${product.id}`" class="btn btn-primary"
            >See Detail</RouterLink
          >
          <button
            v-if="isLogin"
            @click="addBookmarkByProductId(product.id)"
            to="/"
            class="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
