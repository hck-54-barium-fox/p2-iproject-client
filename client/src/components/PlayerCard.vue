<script>
// import { mapActions, mapState, mapWritableState } from 'pinia';

export default {
    // props: ['food'],
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
           #898HH998
        </div>
        <!-- <div class="d-flex flex-row-reverse">
            <div v-if="foodId.some(el => el === food.id)"
                class="p-2"
                @click.prevent="addingNewWishlist(food.id)"><i class="bi bi-bookmark-fill"></i>
            </div>
            <div v-else>
                <div @click.prevent="addingNewWishlist(food.id)" class="p-2"><i class="bi bi-bookmark"></i>
                </div>
            </div>
        </div> -->
        <img src="https://i.pravatar.cc/300?img=3"
            class="card-img-top pb-2 pt-2" alt="...">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center pb-3 border-bottom">AkuBudi</h5>
            <h6 class="card-text text-secondary pt-3">Level: 23</h6>
            <h6 class="card-text text-secondary">Trophies: 2000</h6>
            <h6 class="card-text text-secondary">Total Wins: 2000</h6>
            <h6 class="card-text text-secondary">Total Losses: 2400</h6>
            
        </div>
    </div>

</template>