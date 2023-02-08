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

    <h1 style="color: red;"> Games </h1>
    <div class="row m-5">
        <Card v-for="game in games"  :game="game"/>
    </div>

</template>

<style scoped>

</style>