<script>
import { mapState } from "pinia";
import { useAppStore } from "../stores/app";
export default {
  computed: {
    ...mapState(useAppStore, ["nutritions"]),
  },
};
</script>

<template>
  <div class="flex flex-col gap-3 justify-between pb-5">
    <span class="font-semibold text-lg"
      >🤌 Nutrition of {{ nutritions[0]?.name }}</span
    >
    <ul class="flex flex-col gap-1 text-xs text-semibold">
      <li class="flex gap-2 border-b py-1">
        <div>Calories :</div>
        <div>{{ nutritions[0]?.calories }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Serving Size (g) :</div>
        <div>{{ nutritions[0]?.serving_size_g }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Fat Total (g) :</div>
        <div>{{ nutritions[0]?.fat_total_g }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Fat Saturated (g) :</div>
        <div>{{ nutritions[0]?.fat_saturated_g }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Protein (g) :</div>
        <div>{{ nutritions[0]?.protein_g }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Sodium (mg) :</div>
        <div>{{ nutritions[0]?.sodium_mg }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Potassium (mg) :</div>
        <div>{{ nutritions[0]?.potassium_mg }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Cholesterol (mg) :</div>
        <div>{{ nutritions[0]?.cholesterol_mg }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Carbohydrates Total (g) :</div>
        <div>{{ nutritions[0]?.carbohydrates_total_g }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Fiber (g) :</div>
        <div>{{ nutritions[0]?.fiber_g }}</div>
      </li>
      <li class="flex gap-2 border-b py-1">
        <div>Sugar (g) :</div>
        <div>{{ nutritions[0]?.sugar_g }}</div>
      </li>
    </ul>
  </div>
</template>
