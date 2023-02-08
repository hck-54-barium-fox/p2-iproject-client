<script>
export default {
    props: ['link']
}
</script>

<template>
    <div class="carousel-item">
        <div class="d-block w-100 shadow p-5 mb-5 rounded d-flex justify-content-center">
            <iframe width="1280" height="720" :src="`https://www.youtube.com/embed/${link}`"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>