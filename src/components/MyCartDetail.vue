<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "MyCartDetail",
  components: {},
  props: ["cartDetail"],
  methods: {
    ...mapActions(useAppStore, ["payment", "deleteBookmark"]),
    handlePayment(id) {
      this.payment(id);
    },
    handleRemoveBookmark(id) {
      this.deleteBookmark(id);
    },
  },
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
              <button
                type="button"
                class="btn btn-outline-info"
                @click="handlePayment(cartDetail?.Product.id)"
                v-if="!cartDetail.isPaid"
              >
                Pay
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                v-if="!cartDetail.isPaid"
                @click="handleRemoveBookmark(cartDetail.id)"
              >
                cancel bookmark
              </button>
              <div class="btn btn-outline-success" v-if="cartDetail.isPaid">
                Success Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
