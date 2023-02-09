<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useAppStore } from "../stores/app";

export default {
  name: "CardProductDetail",
  components: { RouterLink },
  props: ["productDetail"],
  computed: {
    ...mapState(useAppStore, ["isLogin"]),
    getRupiah() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.productDetail.product_price);
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
  <div class="card text-white bg-dark mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="productDetail.product_image_url"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ productDetail.product_name }}</h5>
          <p class="card-text">Price {{ getRupiah }}</p>
          <button
            type="button"
            class="btn btn-outline-info"
            v-if="isLogin"
            @click="addBookmarkByProductId(productDetail.id)"
          >
            add bookmark
          </button>
          <RouterLink class="btn btn-outline-info" v-if="!isLogin" to="/login">
            add bookmark
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
