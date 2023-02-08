<script>
import { useAppStore } from "../stores/app";
import { mapActions, mapState } from "pinia";

export default {
    props: ['shoe'],
    methods: {
        ...mapActions(useAppStore, ['addToCart']),
        ...mapState(useAppStore, ['isLogin']),

        handleAddToCart(id) {
            this.addToCart(id)
        }
    }
}
</script>

<template>
    <div id="perCard" class="card mb-3 hover01 column "
        style="width: 18rem; margin-right: 10px; margin-left: 10px; margin-top: 20px;">
        <figure>
            <img style="height: 290px; object-fit: cover; cursor: pointer;"
                :src="shoe.imageUrl"
                alt="..." class="card-img-top ">
        </figure>
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-baselinealign-items-baseline">
                <h5 class="card-title hover-zoom hover-shadow ripple" style="object-fit: cover; cursor: pointer;">
                    {{ shoe.name }}</h5>
            </div>
            <h6 class="card-title">{{ shoe.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</h6>
            <div class="d-flex justify-content-center mt-4">
                <button v-if="this.isLogin" @click.prevent="handleAddToCart(shoe.id)" class="btn btn-primary">
                    <div class="d-flex gap-2">
                        <i class="bi bi-bag-check"></i>
                        <p class="mb-0">Add to cart!</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>