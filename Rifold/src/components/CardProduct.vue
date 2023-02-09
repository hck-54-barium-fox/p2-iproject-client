<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  props: ["el"],
  methods: {
    ...mapActions(useAppStore, ["MyProduct"]),
    handleDetail(id) {
      this.$route.push(`/detail/${id}`);
    },
    handleMyProduct() {
      this.MyProduct(this.el.id);
    },
  },
};
</script>

<template>
  <div class="w-[300px] p-2 ml-12 mt-[100px]">
    <a href="#" class="block group">
      <img
        :src="el.imageUrl"
        alt=""
        class="h-[300px] w-full object-cover sm:h-[300px]"
      />

      <div class="mt-3">
        <h3 class="text-sm text-gray-700">
          {{ el.name }}
        </h3>

        <h3 class="text-sm text-gray-700">size : {{ el.size }}</h3>

        <p class="text-sm text-gray-700">price : {{ el.price }}</p>
        <div class="flex w-full justify-between">
          <div class="w-[30px] h-[30px] mt-3  ml-8">
            <svg
              @click.prevent="handleMyProduct"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <router-link
            :to="`/detail/${el.id}`"
            className="bg-gray-900 text-white px-3 py-1 mr-9 mt-2 rounded-sm h-9"
          >
            <button>detail</button>
          </router-link>
        </div>
      </div>
    </a>
  </div>
</template>
