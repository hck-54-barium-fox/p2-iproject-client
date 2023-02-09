<script>
import { mapActions,mapState } from 'pinia';
import CardMyProduct from '../components/CardMyProduct.vue';
import { useAppStore } from '../stores/app';

export default {
    data() {
        return {
        provinceId: "",
        cityId: "",
        }
    },
    components : {
        CardMyProduct
    },
    computed : {
        ...mapState(useAppStore,['MYProduct','totalHarga','dataProvince','dataCity','totalOngkir']),
     
    },
    methods : {
        ...mapActions(useAppStore,['readMyProduct','payment','getProvince','getCity','getCost']),
        handlePayment() {
        // harga = this.totalHarga + this.totalOngkir
        this.payment()
    },
    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
    
       
    
        
    },
    created() {
        this.readMyProduct()
        this.getProvince()
        this.getCity()
        this.getCost()
    }
}
</script>

<template>
    <!-- <div class="grid grid-cols-3 gap-5">


    </div>
  -->
<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<section>
  <h1 class="sr-only">Checkout</h1>

  <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
    <div class="py-12 bg-gray-50 md:py-24">
      <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div class="flex items-center">
          <span class="w-10 h-10 bg-black rounded-full"></span>

          <h2 class="ml-4 font-medium text-gray-900">Rifold </h2>
          <h2 class="ml-4 font-medium text-gray-900"> Subtotal : {{this.rupiah(this.totalHarga + this.totalOngkir)}}</h2>
        </div>

        <div>
          <p class="text-2xl font-medium tracking-tight text-gray-900">
           total harga baju : {{ this.rupiah(this.totalHarga) }}
          </p>

          <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div class="flow-root">
            <CardMyProduct v-for="product in MYProduct" :key="product.id" :product="product"/>
          </div>
        </div>
      </div>
    </div>
    
    <div class="py-12 bg-white md:py-24">
      <div class="max-w-lg px-4 mx-auto lg:px-8">
        <form class="grid grid-cols-6 gap-4">
        <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<!-- //provisi -->

<div class="flex ">
    <div>
    <div class="flex gap-8">
  <div class="relative">
    <div class="relative inline-flex">
  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select @change="getCity(provinceId)"
        v-model="provinceId"
   class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option>Choose a province</option>
    <option v-for="el in dataProvince" :key="el.province_id" :value="el.province_id" >{{ el.province }}</option>
    
  </select>
</div>
  </div>

</div>
</div>


<!-- city -->
<div class="flex gap-8">
  <div class="relative">
    <div class="relative inline-flex">
  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select @change="getCost(cityId)"
        v-model="cityId"
   class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option>Choose a province</option>
    <option v-for="el in dataCity" :key="el.city_id" :value="el.city_id" >{{ el.city_name }}</option>
    
  </select>
</div>
  </div>

</div>
</div>

          <div class="col-span-6">
            <div class="flex pb-8">
    <h1 class="font-semibold text-bold"> total ongkir : {{ this.rupiah(this.totalOngkir) }} </h1>
  </div>
            <button
            @click.prevent="handlePayment"
              class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</template>