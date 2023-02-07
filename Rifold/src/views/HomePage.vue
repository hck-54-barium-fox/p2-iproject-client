<script>
import { mapActions,mapState } from 'pinia';
import CardProduct from '../components/CardProduct.vue';
import { useAppStore } from '../stores/app';
export default {
    components : {
        CardProduct
    },
    methods : {
        ...mapActions(useAppStore,['Product']),
    },
    computed : {
        ...mapState(useAppStore,['dataProduct'])
    },
    created() {
        this.Product()
    }
}
</script>


<template>
 <section
  class="overflow-hidden bg-[url(https://cdn.shopify.com/s/files/1/0054/6737/3638/files/DESKTOP_194dd37c-e85f-4aec-95ac-f77e5508dace_1600x.jpg?v=1639044622)] bg-cover bg-center bg-no-repeat"
>
  <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-lg text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
      </h2>

      <p
        class="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        officia corporis quasi doloribus iure architecto quae voluptatum beatae
        excepturi dolores.
      </p>

      <div class="mt-4 sm:mt-8">
        <a
          href="#"
          class="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
        >
          <span class="text-sm font-medium"> Order Now </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
<div class="grid grid-cols-3 gap-5">
   <CardProduct v-for="el in dataProduct" :key="el.id" :el="el"/>
</div>
</template>