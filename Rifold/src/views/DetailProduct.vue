<script>
import { mapActions,mapState } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    methods : {
        ...mapActions(useAppStore,['detailProduct'])
    },
    computed : {
        ...mapState(useAppStore,['productDetail'])
    },
    created() {
        this.detailProduct()
        this.detailProduct(this.$route.params.id)
    }
}

</script>

<template>

<section>
  <div class="relative max-w-screen-xl px-4 py-8 mx-auto mt-10">
    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <img
          alt="Les Paul"
          :src="productDetail.imageUrl"
          class="object-cover w-full aspect-square rounded-xl"
        />

      </div>

      <div class="sticky top-0">
        <!-- <strong
          class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong> -->

        <div class="flex justify-between mt-8">
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold">
            {{ productDetail.name }}
              <!-- Fun Product That Does Something Cool -->
            </h1>
            <div class="mt-2 -ml-0.5 flex">
              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="w-5 h-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>

          <p class="text-lg font-bold">Price : {{ productDetail.price }}</p>
        </div>

        <details
          class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                    {{ productDetail.description }}
                </p>
              </div>

            </div>
          </summary>
        </details>

        <form class="mt-8">

         <div class="grid grid-col">
            <fieldset class="mt-4">
            <legend class="mb-1 text-sm font-medium">Size</legend>

            <div class="flow-root">
              <div class="-m-0.5 flex flex-wrap">
                <label for="size_xs" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_xs"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    {{ productDetail.size }}
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-4">
            <legend class="mb-1 text-sm font-medium">Stock</legend>

            <div class="flow-root">
              <div class="-m-0.5 flex flex-wrap">
                <label for="size_xs" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="size"
                    id="size_xs"
                    class="sr-only peer"
                  />

                  <span
                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                  >
                    {{ productDetail.stock }}
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
         </div>
         
          <div class="flex mt-8">
          

         <router-link to="/">
            <button
            type="button"
            class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-600"
          >
           Back
          </button>
         </router-link>
        </div>
        </form>
      </div>
    </div>
  </div>
</section>


</template>