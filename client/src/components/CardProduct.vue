<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    props:['product'],
    methods:{
        ...mapActions(useAppStore, ['buyProduct']),
    }
}
</script>
<template > 
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="">
              <img :src="product.image" class="img-fluid" style="width: 300px; height: 300px;" alt="">
              <div class="member-info">
                <h4>Name: {{ product.name }}</h4>
                <h4>Price: Rp.{{ product.price }},00</h4>
                <span>{{ product.description }}</span>
              </div>
              <div class="d-flex justify-content-start">
                <button @click.prevent="buyProduct(product.id)" class="btn btn-primary"><i class="bx bx-cart" style="width: 100px;"></i></button>
              </div>
            </div>
          </div>
</template>
<style >
    
</style>