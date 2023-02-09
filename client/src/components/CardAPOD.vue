<script>
export default {
    props:['apod']
}
</script>
<template >
  <div class="card w-[700px] bg-base-100 shadow-xl">
        <figure>
            <img
                class="w-full h-[350px] object-cover"
                :src="apod.url"  
            />
        </figure>
        <div class="card-body bg-[#000000] text-white">
            <h2 class="card-title">{{ apod.title }}</h2>
            <p>{{ apod.explanation }}</p>
            <p></p>
        </div>
    </div>
</template>

<style >
    
</style>