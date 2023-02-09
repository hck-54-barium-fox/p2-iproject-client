<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "PaginateComponent",
  props: ["data"],
  computed: {
    startPage() {
      if (this.data?.page === 0) {
        return 1;
      }
      return this.data?.page;
    },

    pages() {
      const range = [];
      let condition = Math.ceil(this.data?.count / 9);
      for (let i = 1; i <= condition; i++) {
        range.push({
          currentPage: i,
          isDisabled: i === this.startPage,
        });
      }
      return range;
    },
  },
  // emit
  methods: {
    ...mapActions(useAppStore, ["fetchProduct"]),

    fetchByPage(page) {
      this.fetchProduct(page);
    },
  },
};
</script>

<template>
  <nav class="mx-auto">
    <nav>
      <ul class="pagination">
        <li class="page-item" v-for="(page, n) in pages" :key="n">
          <button
            @click.prevent="fetchByPage({ page: page?.currentPage })"
            class="page-link"
          >
            {{ page.currentPage }}
          </button>
        </li>
      </ul>
    </nav>
  </nav>
</template>
