<script>
    import { mapActions } from 'pinia';
    import { useCounterStore } from '../stores/counter';

    export default {
        props: ['item'],
        methods: {
            ...mapActions(useCounterStore, ['handlePayment', 'handleFetchTransaction'])
        },
        created(){
            this.handleFetchTransaction()
        }
    }
</script>

<template>
    <div class="col-md-3 mb-5">
      <div class="card-sl">
        <div class="card-image d-flex justify-content-center" style="height: 200px;  ">
          <img
            :src="item.Smartphone.imageUrl" />
        </div>
          <div class="card-heading">
            {{ item.Smartphone.brand }}
          </div>
          <div class="card-text">
            {{ item.Smartphone.name }}
          </div>
          <div class="card-text">
            {{ item.Smartphone.price }}
          </div>
          <div class="card-text">
            {{ item.status }}
          </div>
        <a href="#" class="card-button" v-if="item.status === 'Unpaid'" @click.prevent="handlePayment(item.id, item.Smartphone.price)">Purchase</a>
      </div>
    </div>
</template>