<script>
export default {
  name: "CardProductDetail",
  components: {},
  props: ["productDetail"],
  computed: {
    getRupiah() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.productDetail.product_price);
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
          <p class="card-text">Stock {{ productDetail.product_info }}</p>
          <button type="button" class="btn btn-outline-info">
            add bookmark
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
