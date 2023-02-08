<script>
export default {
  name: "MyCartDetail",
  components: {},
  props: ["cartDetail"],
};
</script>

<template>
  <div class="col">
    <div class="card text-white bg-dark mb-3">
      <div class="row g-0">
        <div class="col-md-2">
          <img
            :src="cartDetail.Product.product_image_url"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ cartDetail.Product.product_name }}</h5>
            <p class="card-text">
              price : {{ cartDetail.Product.product_price }}
            </p>
            <div class="d-flex flex-row gap-2">
              <button type="button" class="btn btn-outline-info">Pay</button>
              <button type="button" class="btn btn-outline-danger">
                cancel bookmark
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
