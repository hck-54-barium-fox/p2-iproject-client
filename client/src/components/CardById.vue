<script>
export default {
    props:['planet']
}
</script>
<template>

    <div class="card w-[500px] bg-base-100 shadow-xl">
        <figure>
            <img
                class="w-full h-[350px] object-fill"
                :src="planet.img.imgUrl"
                :alt="planet.name"
            />
        </figure>
        <div class="card-body bg-[#000000] text-white">
            <h2 class="card-title">{{ planet.name }}</h2>
            <p>{{ planet.description }}</p>
            <p>Image Description : {{ planet.img.imgDescription }}</p>
        </div>
    </div>
</template>

<style></style>
