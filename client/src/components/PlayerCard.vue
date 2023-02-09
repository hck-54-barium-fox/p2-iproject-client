<script>
// import { mapActions, mapState, mapWritableState } from 'pinia';

export default {
    props: ['player'],
    // methods: {
    //     ...mapActions(useFoodStore, ['addWishlist', 'getFoodById',]),
    //     addingNewWishlist(id) {
    //         this.addWishlist(id)
    //         this.foodId.push(id)
    //     },
    //     getDetail(id){
    //         this.$router.push(`/${id}`)

    //     }

    // },
    // computed: {
    //     ...mapWritableState(useFoodStore, ['foodId', 'foodDetailId', 'qrCode'])
    // }
}

</script>
<template>

    <!-- Card 1 -->
    <div class="card pt-3 shadow p-3 mb-5 rounded" style="width: 18rem;">
        <div class="card-header fst-italic">
           {{ player.tag }}
        </div>
        <img :src="`https://i.pravatar.cc/300?img=${player.id}`"
            class="card-img-top pb-2 pt-2" :alt="player.name">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center pb-3 border-bottom">{{ player.name }}</h5>
            <h6 class="card-text text-secondary pt-3">Level: {{ player.level }}</h6>
            <h6 class="card-text text-secondary">Trophies: {{ player.trophies }}</h6>
            <h6 class="card-text text-secondary">Total Wins: {{ player.wins }}</h6>
            <h6 class="card-text text-secondary">Total Losses: {{ player.losses }}</h6>
            
        </div>
    </div>

</template>