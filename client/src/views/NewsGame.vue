<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import CardNews from '../components/CardNews.vue'
export default {
    components: {
        CardNews
    },
    methods: {
        ...mapActions(useAppStore, ['fetchNewsTechnlogies'])
    },
    computed: {
        ...mapState(useAppStore, ['newsGame'])
    },
    created() {
        this.fetchNewsTechnlogies()
    }
}
</script>
<template >
    <!-- <h1 style="color: red;">News Games</h1> -->
    <div class="container row m-5">
        <CardNews v-for="news in newsGame" :news="news" />
    </div>
</template>

<style scoped>
 
body {
    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    height: 100%;
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