<script>
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue'
import { mapActions, mapState } from 'pinia'
import { useFoodStore } from '../stores/food'
export default {
    components: {
        Card,
        Navbar,
        Footer
    },
    data() {
        return {
        }
    },
    created(){
        this.fetchFood()
        this.getPage()
        this.fetchWishlist()
    },
    methods: {
        ...mapActions(useFoodStore, ['fetchFood', 'getPage', 'addWishlist', 'fetchWishlist',])
    },
    computed: {
        ...mapState(useFoodStore, ['foodData', 'totalPage'])
    },
    watch: {
        '$route.query'(){
           this.fetchFood(this.$route.query)
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            Indomi Product
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-2">
        Filter by Category
    </div>
    <div class="d-flex justify-content-center pt-3 grid gap-3">
        <button 
        @click="$router.push(`/`)"
        type="button" class="btn btn-outline-success">All</button>
        <button 
        @click="$router.push(`?filter=2`)"
        type="button" class="btn btn-outline-success">Goreng</button>
        <button 
        @click="$router.push(`?filter=3`)"
        type="button" class="btn btn-outline-success">Rebus</button>
    </div>
    <Navbar />
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <Card v-for="food in foodData" :key="foodData.id" :food="food"/>
    </div>

    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end pe-5 me-5 pb-2">
            <li v-for="index in Math.ceil(totalPage/8)" class="page-item"><div @click="$router.push(`?page=${index}`)" class="page-link">{{ index }}</div></li>
        </ul>
    </nav>
</template>