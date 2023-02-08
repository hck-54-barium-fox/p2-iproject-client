<script>
import Navbar from "../components/Navbar.vue";
import CardMyCart from "../components/CardMyCart.vue";

import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  components: {
    Navbar,
    CardMyCart,

  },
  computed: {
    ...mapState(useAppStore, ["mycart", "cartTotalAmount"]),
  },
  methods: {
    ...mapActions(useAppStore, ["fetchMyCart"]),
  },
  created() {
    this.fetchMyCart()

  },
};
</script>
<template>
  <!-- component -->
  <div class="flex items-center justify-center py-8">
    <!-- <Navbar/> -->
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    <button
      class="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
    >
      Open Modal
    </button>
  </div>
  <div
    class="w-full h-full bg-rose-400 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
    id="chec-div"
  >
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    <div
      class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
      id="checkout"
    >
      <div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
        <div
          class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
          id="scroll"
        >
          <div
            class="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-left"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            <p
              @click.prevent="$router.push('./')"
              class="text-sm pl-2 leading-none dark:text-black dark:hover:text-rose-700"
            >
              Back
            </p>
          </div>
          <p
            class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-black pt-3"
          >
            My Cart
          </p>
          <div
            class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
          >
            <CardMyCart v-for="product in mycart" :key="product.id" :mycart="product" />
          </div>
        </div>
        <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 h-full">
          <div
            class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto"
          >
            <div>
              <p
                class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-black"
              >
                Summary
              </p>
              <div class="flex items-center justify-between pt-16">
                <p class="text-base leading-none text-gray-800 dark:text-black">
                  Subtotal
                </p>
                <p class="text-base leading-none text-gray-800 dark:text-black">
                  {{ this.cartTotalAmount }}
                </p>
              </div>
              <div class="flex items-center justify-between pt-5">
                <p class="text-base leading-none text-gray-800 dark:text-black">
                  Shipping
                </p>
                <p
                  class="text-base leading-none text-gray-800 dark:text-black"
                >Free</p>
              </div>
              <div class="flex items-center justify-between pt-5">
                <p class="text-base leading-none text-gray-800 dark:text-black">
                  Tax
                </p>
                <p
                  class="text-base leading-none text-gray-800 dark:text-black"
                >No Tax</p>
              </div>
            </div>
            <div>
              <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p
                  class="text-2xl leading-normal text-gray-800 dark:text-black"
                >
                  Total
                </p>
                <p
                  class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-black"
                >
                 $ {{ this.cartTotalAmount }}
                </p>
              </div>
              <button
                class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* width */
#scroll::-webkit-scrollbar {
  width: 1px;
}

/* Track */
#scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
#scroll::-webkit-scrollbar-thumb {
  background: rgb(133, 132, 132);
}
</style>
