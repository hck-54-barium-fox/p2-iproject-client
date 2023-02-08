<script>
import CardNews from '../components/CardNews.vue'
// import { mapActions, mapState } from 'pinia'
// import { useFoodStore } from '../stores/food'
export default {
    components: {
        CardNews,
    },
    data() {
        return {
        }
    },
    // created(){
    //     this.fetchFood()
    //     this.getPage()
    //     this.fetchWishlist()
    // },
    // methods: {
    //     ...mapActions(useFoodStore, ['fetchFood', 'getPage', 'addWishlist', 'fetchWishlist',])
    // },
    // computed: {
    //     ...mapState(useFoodStore, ['foodData', 'totalPage'])
    // },
    // watch: {
    //     '$route.query'(){
    //        this.fetchFood(this.$route.query)
    //     }
    // }
}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            News
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-2">
        Checkout Our Latest Video!
    </div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="d-block w-100 shadow p-5 mb-5 rounded d-flex justify-content-center">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/XWI5qf3fFUk"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <CardNews />
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-5 d-flex justify-content-center">
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
    </div> -->

    <!-- <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end pe-5 me-5 pb-2">
            <li v-for="index in Math.ceil(totalPage/8)" class="page-item"><div @click="$router.push(`?page=${index}`)" class="page-link">{{ index }}</div></li>
        </ul>
    </nav> -->
</template>