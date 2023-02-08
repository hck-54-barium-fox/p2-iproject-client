<script>
export default {
    props:['planet']
}
</script>
<template>

        <div class="col-span1 p-3 bg-transparent text-white">
                  <div class="bg-white shadow-md rounded-lg overflow-hidden flex">
                    <!-- Card content here -->
                    <div class="w-[40%] h-[400px] bg-white">
                        <img
                        :src="planet.img.imgUrl"
                        class="w-full h-full object-cover"
                    />
                    </div>
                    <div class="w-[60%] h-[400px] bg-[#000000] text-center">
                        <div class="w-full h-1/3 text-center">
                            <h1 class="mt-3 text-4xl font-semibold">{{ planet.name}}</h1>
                        </div>
                        <div class="w-full h-2/3">
                            <p>{{ planet.description }}</p>
                        </div>
                    </div>
                  </div>
                </div>

</template>

<style></style>
