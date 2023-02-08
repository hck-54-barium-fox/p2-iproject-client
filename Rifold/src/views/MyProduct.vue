<script>
import { mapActions,mapState } from 'pinia';
import CardMyProduct from '../components/CardMyProduct.vue';
import { useAppStore } from '../stores/app';

export default {
    components : {
        CardMyProduct
    },
    computed : {
        ...mapState(useAppStore,['MYProduct','totalHarga']),
     
    },
    methods : {
        ...mapActions(useAppStore,['readMyProduct','payment']),
        handlePayment() {
        this.payment()
    }
        
    },
    created() {
        this.readMyProduct()
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-5">
     <CardMyProduct v-for="product in MYProduct" :key="product.id" :product="product"/>

    </div>
 

<section>
  <div class="relative mx-auto max-w-screen-xl px-4 py-8">
    <div>
      <h1 class="text-2xl font-bold lg:text-3xl">Buy product Rifold</h1>
    </div>

    <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
      

      <div class="lg:sticky lg:top-0">
        <form class="space-y-4 lg:pt-8">
        

          <fieldset>
            <legend class="text-lg font-bold">Material</legend>

            <div class="mt-2 flex gap-1">
              <label for="material_cotton" class="cursor-pointer">
                <input
                  type="radio"
                  id="material_cotton"
                  name="material"
                  class="peer sr-only"
                  checked
                />

                <span
                  class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                >
                  Cotton
                </span>
              </label>

              <label for="material_wool" class="cursor-pointer">
                <input
                  type="radio"
                  id="material_wool"
                  name="material"
                  class="peer sr-only"
                  checked
                />

                <span
                  class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                >
                  Wool
                </span>
              </label>
            </div>
          </fieldset>

          <div class="rounded border bg-gray-100 p-4">
            <p class="text-sm">
              <span class="block"> Pay as low as $3/mo with 0% APR. </span>

              <a href="" class="mt-1 inline-block underline"> Find out more </a>
            </p>
          </div>

          <div>
            <p class="text-xl font-bold">{{ this.totalHarga }}</p>
          </div>

          <button
            @click.prevent="handlePayment"
            type="submit"
            class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            Buy
          </button>

          <button
            type="button"
            class="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Notify when on sale
          </button>
        </form>
      </div>

     
    </div>
  </div>
</section>

</template>