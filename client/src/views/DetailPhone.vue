<script>
  import { mapActions, mapState } from 'pinia';
  import { useCounterStore } from '../stores/counter';

  export default{
    computed: {
    ...mapState(useCounterStore, ['detailPhone', 'qrCode']),
  },
  methods: {
    ...mapActions(useCounterStore, ['handleDetailPhoneById', "rupiah"]),

  },
  created() {
    this.handleDetailPhoneById(this.$route.params.id);
  },
  }
</script>

<template>
    <!-- detail phone -->
<div class="container mb-5" style="margin-top: 50px">
    <div class="d-flex justify-content-between gap-5">
      <div style="width: 1000px">
        <h2 class="title">{{detailPhone.brand}}</h2>
        <p class="text mt-3">
          {{detailPhone.name}}
        </p>
        <h4>Harga Sewa {{ detailPhone.brand }} {{ detailPhone.name }} dan Spesifikasi</h4>
        <p class="text mt-3">
          {{detailPhone.description}}
        </p>
        <h5 class="mt-3">{{ rupiah(detailPhone.price) }}/Day</h5>
        <button class="btn btn-warning mt-3" @click.prevent="handleTransaction(detailPhone.id)">Purchase Now</button>
        <!-- Vertically centered modal -->
        <button
          type="button"
          class="btn btn-warning mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="margin-left: 10px"
        >
          <img src="tessgambar" alt="" />
        </button>
        <!-- modal section -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Scan QR Code - Rent For Your prestige
                </h1>
                <button
                  type="button"
                  class="btn-close btn-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <img style="width: 200px;" class="mb-8" :src="qrCode"/>    
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 mb-6" style="margin-top: 10px;">
        <img
          :src="detailPhone.imageUrl"
          class="img-fluid rounded"
          alt="..."
          width="800"
        />
      </div>
    </div>
  </div>
</template>

<style>

</style>