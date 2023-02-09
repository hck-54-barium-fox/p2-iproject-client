<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {},
  methods: {
    ...mapActions(useCounterStore, ["sedekah"]),
  },
};
</script>

<template>
  <section class="relative py-24 px-4">
    <div class="inset-0 h-auto z-10 p-2">
      <div class="flex flex-row">
        <img
          src="https://cdn.discordapp.com/attachments/1062975881905184830/1072756677377531966/IMG-20220908-WA0054.jpg"
          alt=""
          class="h-96 w-96 p-2" />
        <img
          src="https://cdn.discordapp.com/attachments/1062975881905184830/1072756677750829067/IMG-20220908-WA0047.jpg"
          alt=""
          class="h-full w-96 p-2" />
        <!-- <img
          src="https://images.unsplash.com/photo-1509315047084-af74f1192bee"
          alt=""
          class="h-full w-full object-fit-cover" /> -->
      </div>
    </div>

    <div
      class="text-white container mx-auto"
      style="position: sticky; top: 0; height: ">
      <h1 class="mb-4"></h1>

      <a
        @click.prevent="sedekah"
        href="#"
        class="inline-block bg-blue-500 text-white no-underline hover:bg-blue-800 mt-4 p-8 rounded"
        style="padding: 10px 290px"
        >Peduli Perjuangan Markaz</a
      >
    </div>
  </section>
</template>
