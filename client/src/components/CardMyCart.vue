<script>
import axios from 'axios';
import { mapState, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';

    export default {
        props:['mycart'],
        computed:{
            ...mapState(useAppStore,['isAuth']),
            //writable totalmount
            ...mapWritableState(useAppStore, ['cartTotalAmount'])
            
        },
        data(){
            return{
                detailProduct:{}
            }
        },
        async created(){
            const { data } = await axios.get(this.mycart.product_api_url)
            this.detailProduct = data
            console.log({ type: typeof this.detailProduct.price, price: this.detailProduct.price })
            this.cartTotalAmount += +this.detailProduct.price
            // this.totalmount += data.price
        }
    }
</script>

<template>
  <div class="md:w-4/12 2xl:w-1/4 w-full">
    <img
      :src="detailProduct.image_link"
      alt="Black Leather Bag"
      class="h-full object-center object-cover md:block hidden"
    />
  </div>
  <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
    <p class="text-xs leading-3 text-gray-800 dark:text-black md:pt-0 pt-4">
      {{ detailProduct.brand }}
    </p>
    <div class="flex items-center justify-between w-full pt-1">
      <p
        class="text-base font-black leading-none text-gray-800 dark:text-black"
      >
        {{ detailProduct.name }}
      </p>
    </div>

    <div class="flex items-center justify-between pt-5">
      <div class="flex itemms-center">
        <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
          Remove
        </p>
      </div>
      <p
        class="text-base font-black leading-none text-gray-800 dark:text-black"
      > 
      ${{ detailProduct.price }}
      </p>
    </div>
  </div>
  
</template>
