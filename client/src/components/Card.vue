<script>
export default {};
</script>

<template>
  <div class="flex flex-col rounded-lg overflow-hidden border border-primaryColor">
    <div class="flex flex-col relative">
      <img
        src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_150.jpg"
        alt="example-image"
      />
      <span
        class="absolute bottom-0 left-0 bg-white m-3 font-semibold px-3 py-1 text-xs rounded-lg"
        >1 Servings</span
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
    <div class="flex flex-col p-3 gap-3">
      <span class="text-lg font-semibold">Emeril's Pizza</span>
      <span class="text-sm"
        >Preheat the oven 400 degrees. In an electric mixer, ...</span
      >
    </div>
    <div class="text-sm flex p-3 flex-col gap-3">
      <button class="px-5 py-3 rounded-lg bg-primaryColor font-semibold">
        See Recipe
      </button>
    </div>
  </div>
</template>
