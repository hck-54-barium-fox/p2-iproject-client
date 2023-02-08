<script>
import { RouterLink } from "vue-router";
export default {
  name: "CardProduct",
  components: {
    RouterLink,
  },
  props: ["product"],
  computed : {
    getRupiah(){
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.product.product_price);
    }
  }
};
</script>

<template>
  <!-- <div class="row"> -->
  <div class="col col-sm-6 col-md-4 p-1">
    <div class="card">
      <img :src="product.product_image_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.product_name }}</h5>
        <p class="card-text">
          Stock : {{ product.product_info }}
        </p>
        <p>
          Price : {{ getRupiah }}
        </p>
        <div class="d-flex flex-column justify-content-center gap-2">
          <RouterLink to="/products/" class="btn btn-primary">See Detail</RouterLink>
          <RouterLink to="/" class="btn btn-primary">Add Bookmark</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
