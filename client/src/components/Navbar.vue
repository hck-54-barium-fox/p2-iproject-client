<script>
export default {};
</script>

<template>
  <div class="flex justify-center text-3xl py-5 border-b">
    <div class="flex flex-col gap-3">
      <span @clik.prevent="this.$ruote.push('/')" class="italic font-bold cursor-pointer">hafood</span>
      <span class="text-center text-sm"><span class="font-semibold text-primaryDarkColor">how about</span> food</span>
    </div>
  </div>
</template>
