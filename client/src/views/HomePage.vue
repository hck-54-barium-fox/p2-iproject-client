<script>
import Card from '../components/Card.vue'
import { useCardStore } from '../stores/card'
import { mapActions, mapState } from 'pinia'
export default {
    components: {
        Card,
    },
    data() {
        return {
        }
    },
    created(){
        this.fetchCard()
    },
    methods: {
        ...mapActions(useCardStore, ['fetchCard'])
    },
    computed: {
        ...mapState(useCardStore, ['dataCard'])
    },
    watch: {
        '$route.query'(){
           this.fetchCard(this.$route.query)
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            Cards
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-2">
        Filter by Elixir Cost
    </div>
    <div class="d-flex justify-content-center pt-3 grid gap-3">
        <button @click="$router.push(`/?sort=2`)" type="button" class="btn btn-outline-warning">
            Asc
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-up"
                viewBox="0 0 16 16">
                <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
            </svg>
        </button>
        <button @click="$router.push(`/?sort=1`)" type="button" class="btn btn-outline-warning">
            Desc
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-down"
                viewBox="0 0 16 16">
                <path
                    d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
        </button>
        
    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <Card v-for="card in dataCard" :card="card"/>
    </div>

    <!-- <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end pe-5 me-5 pb-2">
            <li v-for="index in Math.ceil(totalPage/8)" class="page-item"><div @click="$router.push(`?page=${index}`)" class="page-link">{{ index }}</div></li>
        </ul>
    </nav> -->
</template>