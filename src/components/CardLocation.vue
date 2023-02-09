<script>

export default {
 props: ['location'],
 computed: {
  bgCard() {
   return `bg-[url('${location?.imageUrl}')] w-[360px] h-[300px] relative rounded-md shadow-xl`
  }
 }
}
</script>
<template>
 <div class="rounded hover:shadow-2xl shadow-sm transition-all ease-in-out duration-300 cursor-pointer" :style="{
  'background-image': `url('${location?.imageUrl ? location?.imageUrl : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'}')`,
  'width': '360px',
  'height': '300px',
  'position': 'relative',
  'background-position': 'center',
  'background-repeat': 'no-repeat',
  'backgroundSize': 'cover',
  'image-rendering': 'crisp-edges'
 }">
  <div class="bottom-5 absolute left-2 text-white">
   <p class="text-[2rem] tracking-wide">{{ location.country }}</p>
   <p class="text-[1.2rem]">{{ location.region || 'not found' }}</p>
  </div>
 </div>
</template>