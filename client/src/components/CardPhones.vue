<script>
    import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

    export default{
        props: ['item'],
        methods: {
            ...mapActions(useCounterStore, ['handleAddTransactions', 'handlePayment'])
        },
        computed: {
            ...mapState(useCounterStore, ['isLogin'])
        }
    }
</script>

<template>
    <div class="col-md-3">
      <div class="card-sl">
        <div class="card-image">
          <img
            :src="item.imageUrl" />
        </div>
          <a class="card-action" href="#" @click.prevent="handleAddTransactions(item.id)"><i class="fa fa-heart" ></i></a>
          <div class="card-heading">
            {{ item.brand }}
          </div>
          <div class="card-text">
            {{ item.name }}
          </div>
          <div class="card-text">
            {{ item.price }}
          </div>
        <a href="#" class="card-button2" @click.prevent="this.$router.push(`/smartphones/${item.id}`)">Detail</a>
      </div>
    </div>
</template>