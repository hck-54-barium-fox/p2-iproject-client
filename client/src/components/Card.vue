<script>
// import { mapActions, mapState, mapWritableState } from 'pinia';

export default {
    props: ['card'],
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
           <img src="https://www.pngkey.com/png/full/362-3629652_5-elixir-de-clash-of-clans.png"
           style="width: 35px"
           /> Elixir Cost: {{ card.elixir }}
        </div>
        <img :src="card.iconUrl"
            class="card-img-top border-bottom border-2 pb-2 pt-2" :alt="card.name">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center pb-3">{{ card.name }}</h5>
            <div
             class="btn btn-warning d-flex justify-content-center">
                Add to My Deck!
            </div>
        </div>
    </div>

</template>