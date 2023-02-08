<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  props: ["el"],
  components: {},
  methods: {
    ...mapActions(useCounterStore, ["likePost"])
  }
};
</script>

<template>
  
  <div class="pt-16">
    <div class="card m-2 pt-0 grid-flow-col bg-slate-800" style="width: 18rem height: 10rem;">
      <img
       
        style="cursor: pointer; width: 100%;"
        :src="el.imageUrl"
        alt="Your Name"
        class="card-img-top" 
         />
      <div class="card-body ">
        <h5 class="card-title" style="font-weight: bold">{{ el.title }}</h5>
        <p class="card-text">
          {{ el.content }}
        </p>
      </div>
      <div class="p-1">
        <button
          @click="likePost(el.id)"
          class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span
            class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
            ><i class="bx bx-heart"></i
          ></span>
          <span class="text-sm font-medium">Like</span>
        </button>
      </div>
    </div>
  </div>
</template>
