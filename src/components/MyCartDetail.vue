<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "MyCartDetail",
  components: {},
  computed: {
    ...mapState(useAppStore, ["productDetail"]),
  },
  methods: {
    ...mapActions(useAppStore, ["fetchProductById"]),
  },
  created() {
    this.fetchProductById(this.$route.params.id);
  },
};
</script>

<template>
  <div class="col">
    <div class="card text-white bg-dark mb-3">
      <div class="row g-0">
        <div class="col-md-2">
          <img
            :src="productDetail.product_image_url"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in
            </p>
            <div class="d-flex flex-row gap-2">
              <button type="button" class="btn btn-outline-info">Pay</button>
              <button type="button" class="btn btn-outline-danger">
                cancel bookmark
              </button>
            </div>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
