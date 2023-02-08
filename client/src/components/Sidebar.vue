<script>
export default {};
</script>

<template>
  <div class="col-span-2 border-r p-10">
    <div class="flex flex-col gap-5">
      <!-- Search Recipe -->
      <div class="flex flex-col gap-3">
        <div class="font-semibold">👀 Search Recipe</div>
        <input
          type="text"
          name="searchFood"
          id="searchFood"
          placeholder="Type recipe here .."
          class="border border-primaryColor rounded-lg placeholder:text-sm"
        />
      </div>
      <!-- Find Ingredients Nutrition -->
      <div class="flex flex-col gap-3">
        <div class="font-semibold">👀 Ingredient Nutrition</div>
        <input
          type="text"
          name="searchFood"
          id="searchFood"
          placeholder="Find nutrition here .."
          class="border border-primaryColor rounded-lg placeholder:text-sm"
        />
      </div>
      <span class="py-5 border-t flex gap-1 font-semibold cursor-pointer"
        ><div>🏃‍♂️</div>
        <span>Logout</span></span
      >
    </div>
  </div>
</template>
