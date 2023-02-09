<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  data() {
    return {
      formSearch: {
        recipe: "",
        nutrition: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppStore, ["doLogout", "fetchRecipe"]),
    handleLogout() {
      this.doLogout();
    },
    handleSearchRecipe() {
      this.fetchRecipe(this.formSearch.recipe);
    },
  },
};
</script>

<template>
  <div class="col-span-2 border-r p-10">
    <div class="flex flex-col gap-5">
      <form class="flex flex-col gap-3">
        <div class="font-semibold">👀 Search Recipe</div>
        <div class="flex gap-3">
          <input
            v-model="formSearch.recipe"
            type="text"
            name="searchFood"
            id="searchFood"
            placeholder="e.g Pizza"
            class="border w-full border-primaryColor rounded-lg placeholder:text-sm"
          />
          <div
            @click.prevent="handleSearchRecipe"
            class="rounded-lg border border-primaryColor flex items-center p-3 border"
          >
            <img src="../assets/icons/search.png" alt="search" />
          </div>
        </div>
      </form>
      <div class="flex flex-col gap-3">
        <div class="font-semibold">👀 Ingredient Nutrition</div>
        <div class="flex gap-3 pb-5">
          <input
            type="text"
            name="searchFood"
            id="searchFood"
            placeholder="e.g Sugar"
            class="border w-full border-primaryColor rounded-lg placeholder:text-sm"
          />
          <div
            class="rounded-lg border border-primaryColor flex items-center p-3 border"
          >
            <img src="../assets/icons/search.png" alt="search" />
          </div>
        </div>
      </div>
      <span class="py-8 border-t flex gap-1 font-semibold cursor-pointer"
        ><div>🏃‍♂️</div>
        <span @click.prevent="handleLogout">Logout</span></span
      >
    </div>
  </div>
</template>
