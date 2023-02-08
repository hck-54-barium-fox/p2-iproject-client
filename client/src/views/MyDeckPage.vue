<script>
import MyCard from '../components/MyCard.vue'
import { mapActions, mapState } from 'pinia'
import { useCardStore } from '../stores/card'
export default {
    components: {
        MyCard,
    },
    data() {
        return {
        }
    },
    created(){
        this.fetchMyDeck()
    },
    methods: {
        ...mapActions(useCardStore, ['fetchMyDeck'])
    },
    computed: {
        ...mapState(useCardStore, ['dataDeck'])
    },
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
            Total Card: {{ dataDeck.length }}
        </button>
        <button type="button" class="card pt-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded fs-6">
            Average Elixir: {{ (dataDeck.map(el => el.Card.elixir).reduce((a, b) => a + b)/dataDeck.length).toFixed(1) }}
        </button>

    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <MyCard v-for="card in dataDeck" :key="card.id" :card="card"/>
    </div>
</template>