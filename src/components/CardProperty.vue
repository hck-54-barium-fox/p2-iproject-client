<script>
export default {
 props: ['hotel'],

}
</script>

<template>

 <div class="flex justify-center gap-4 items-start flex-wrap">
  <div class="w-[300px] shadow-lg">
   <img :src="hotel?.mainImgUrl" class="w-full rounded h-[400px]" alt="">
   <div class="p-4 h-[300px]">
    <h3 class="font-semibold text-[1.5rem] tracking-widest my-3">{{
     hotel?.hotelName.trim().replace(/\s+/g, " ").split(" ").length > 5 ? hotel?.hotelName.substring(0, 15) + '...' :
      hotel?.hotelName
    }}</h3>
    <p class="font-light my-3">{{ hotel.country }}</p>
    <p class="font-medium my-3">Starting from $99</p>
    <p class="my-3">
     <span class="material-symbols-outlined">
      grade
     </span>
     <span>
      {{ hotel.score }}
     </span>
    </p>
   </div>
  </div>
 </div>
</template>