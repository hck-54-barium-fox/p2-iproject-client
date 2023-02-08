<script>
import { mapActions,mapState } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
 props : ['product'] ,
 
 methods : {
    ...mapActions(useAppStore,['payment',]),
   
 },
 computed : {
    ...mapState(useAppStore,['totalHarga'])
 },
//  created() {
//     this.totalHarga += this.product.product.price
//  }
}
</script>

<template>
 <div class="w-[300px] p-2 ml-12 mt-[200px]">
        <a href="#" class="relative block group">
  <img
    :src="product.Product.imageUrl"
    alt=""
    class="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
  />

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">{{ product.Product.name }}</h3>

    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
      {{ product.Product.decription }}
    </p>
    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
      {{ product.Product.price }}
    </p>
  </div>
</a>
      </div>

  

</template>