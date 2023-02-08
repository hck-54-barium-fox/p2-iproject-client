<script>
import MyCard from '../components/MyCard.vue'
// import { mapActions, mapState } from 'pinia'
// import { useFoodStore } from '../stores/food'
export default {
    components: {
        MyCard,
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
            My Deck
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-3">
        Prepare for battle!
    </div>
    <div class="d-flex justify-content-center pt-3 grid gap-3">
        <button type="button" class="card pt-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded fs-6">
            Total Card: 3
        </button>
        <button type="button" class="card pt-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded fs-6">
            Average Elixir: 3.4
        </button>

    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <MyCard />
        <MyCard />
        <MyCard />
    </div>

    <!-- <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end pe-5 me-5 pb-2">
            <li v-for="index in Math.ceil(totalPage/8)" class="page-item"><div @click="$router.push(`?page=${index}`)" class="page-link">{{ index }}</div></li>
        </ul>
    </nav> -->
</template>