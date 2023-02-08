<script>
import { mapActions, mapState } from 'pinia';
import Card from '../components/CardHome.vue'
import { useAppStore } from '../stores/app';
export default {
    components: {
        Card
    },
    computed: {
        ...mapState(useAppStore, ['games'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchGames'])
    },
    created() {
        this.fetchGames()
    }
}
</script>

<template>



    <div class="container row m-5">
        <Card v-for="game in games" :game="game" />
    </div>



</template>

<style scoped>
body {
    height: 100%;
    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.container {
    width: 100%;
    height: 90vh;
    overflow: scroll
}
</style>