<script>
import { mapActions, mapWritableState } from 'pinia';
import { usePoemStore } from '../stores/poem';
import showQuote from '../components/showQuote.vue';

export default {
  components: {
    showQuote
  },
  methods: {
    ...mapActions(usePoemStore, ['randomQuote']),
    handleQuote() {
      this.randomQuote()
    }
  },
  computed: {
    ...mapWritableState(usePoemStore, ['quotes'])
  }
}
</script>

<template>
  <div class="container absolute top-[40vh] left-[10vh] flex flex-row gap-x-5 px-10 w-sm">
    <showQuote v-for="quote in quotes" :key="quote.id" :quote="quote" />
  </div>

    <button class="btn max-w-xs bg-neutral-800 shadow-md absolute bottom-[30vh] left-[75vh]" type="button" @click="handleQuote">Generate
      Random Movie Quote</button>
</template>