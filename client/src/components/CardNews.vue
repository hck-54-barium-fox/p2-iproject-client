<script>
export default {
    props: ['news']
}
</script>
<template >
    <div v-if="news !== null">
            <div class="col-3 m-2">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="news.urlToImage" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ news.title }}</h5>
                        <p class="card-text"> {{ news.publishedAt }}</p>
                        <p class="card-text"> Source <b> {{ news.source }} </b> </p>
                        <p class="card-text"> Author <b> {{ news.author }} </b> </p>
                        <a href="#" class="btn btn-primary">Detail </a>
                    </div>
                </div>
        </div>
    </div>
</template>
<style scoped>

.container{
    display: flex;
    height: 100vh;
}
</style>