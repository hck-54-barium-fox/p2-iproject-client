<script>
export default {
    props: ['news']
}
</script>
<template >
   
        <div v-if="news !== null"  class="col-3 my-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="news.urlToImage" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ news.title }}</h5>
                        <p class="card-text"> {{ news.publishedAt }}</p>
                        <p class="card-text"> Source <b> {{ news.source }} </b> </p>
                        <p class="card-text"> Author <b> {{ news.author }} </b> </p>
                        <!-- <button @click.prevent="this.$router.push(`/detailNewsGames/${news.id}`)"  class="btn btn-primary"> Detail </button> -->
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