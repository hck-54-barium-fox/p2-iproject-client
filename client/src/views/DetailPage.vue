<script>
import { mapState } from "pinia";
import { useAppStore } from "../stores/app";
import Nutrition from "../components/Nutrition.vue";
export default {
  components: {
    Nutrition,
  },
  data() {
    return {
      splittedIngredients: [],
      isShow: false,
    };
  },
  watch: {
    recipe(newRecipe, oldRecipe) {
      this.splittedIngredients = newRecipe.ingredients.split("|");
    },
  },
  computed: {
    ...mapState(useAppStore, [
      "recipe",
      "fetchDetail",
      "fetchNutrition",
      "nutritions",
    ]),
  },
  methods: {
    handleNutrition(dataName) {
      this.fetchNutrition(dataName);
    },
  },
  created() {
    this.fetchDetail(this.$route.params.title);
    // console.log(this.$route.params.title, '<<<')
  },
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-3 gap-5 rounded-lg overflow-hidden">
      <div class="col-span-3">
        <div class="flex flex-col gap-3">
          <span class="font-semibold text-2xl">Detail Recipe</span>
          <div
            class="flex rounded-lg overflow-hidden border border-primaryColor"
          >
            <div class="w-1/3 border-r">
              <div class="relative">
                <img
                  src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_150.jpg"
                  alt="example-image"
                  class="object-cover w-full"
                />
                <span
                  class="absolute bottom-0 left-0 bg-white m-3 font-semibold px-3 py-1 text-xs rounded-lg"
                  >{{ recipe.servings }}</span
                >
                <div
                  class="bg-white p-3 absolute rounded-lg bottom-[-15px] right-3 border"
                >
                  <img
                    src="@/assets/icons/bookmark.svg"
                    alt="example-icon"
                    class="w-[15px] h-auto"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-3 px-3 py-5">
                <span class="text-xl font-semibold">{{ recipe.title }}</span>
                <ul
                  v-for="ingredient in splittedIngredients"
                  :key="ingredient"
                  class="flex flex-col text-xs gap-1"
                >
                  <li
                    @click.prevent="handleNutrition(ingredient)"
                    class="flex gap-2 cursor-pointer"
                  >
                    <div>📌</div>
                    <div>{{ ingredient }}</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex w-2/3 flex-col px-3 py-5">
              <Nutrition v-if="nutritions.length !== 0" />
              <div class="flex flex-col gap-5 justify-between">
                <div class="flex flex-col gap-3">
                  <div class="font-semibold text-lg">👨‍🍳 How to make :</div>
                  <span class="text-sm">{{ recipe.instructions }}</span>
                </div>
                <div class="flex justify-end">
                  <button
                    class="text-sm px-10 py-3 font-semibold rounded-lg bg-primaryColor"
                  >
                    Buy sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>
