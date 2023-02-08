<script>
import { mapActions, mapWritableState } from 'pinia';
import { usePoemStore } from '../stores/poem';

export default{
  methods: {
    ...mapActions(usePoemStore, ['randomQuote']),
    handleQuote(){
      this.randomQuote()
    }
  },
  computed:{
    ...mapWritableState(usePoemStore, ['quote'])
  }
}
</script>

<template>
     <div class="container mt-[35vh] pl-[70vh] flex flex-col gap-y-5">
    <p>{{ this.quote }}</p>
    <button class="btn max-w-xs ml-10 bg-neutral-800 shadow-md mt-5" type="">Generate Random Movie Qote</button>
  </div>
</template>