<script>
import PlayerCard from '../components/PlayerCard.vue';
// import { mapActions, mapState } from 'pinia'
// import { useFoodStore } from '../stores/food'
export default {
    components: {
        PlayerCard
    },
    data() {
        return {
            tag: ''
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
            Player
        </div>
    </div>
    <div class="d-flex justify-content-center text-secondary pt-2">
        Search for Player
    </div>
    <div class="d-flex justify-content-center pt-3 grid gap-3">
        <label for="email-login" class="form-label"></label>
        <input v-model="tag" type="email" class="form-control" id="email-login" placeholder="Insert your ID" style="width: 200px">

    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <PlayerCard />
    </div>
</template>