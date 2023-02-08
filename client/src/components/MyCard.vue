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
           <img src="https://www.pngkey.com/png/full/362-3629652_5-elixir-de-clash-of-clans.png"
           style="width: 35px"
           /> Elixir Cost: 3
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
        <img src="https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
            class="card-img-top border-bottom border-2 pb-2 pt-2" alt="...">
        <div class="card-body">
            <h3 class="card-title d-flex justify-content-center pt-3">Archer</h3>
        </div>
    </div>

</template>