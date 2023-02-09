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
    <div id="product-section" class="card mb-3 shadow hover01 column perCard"
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
                <button v-if="this.isLogin" @click.prevent="handleAddToCart(shoe.id)" class="btn btn-primary addcart-btn">
                    <div class="d-flex gap-2">
                        <i class="bi bi-bag-check"></i>
                        <p class="mb-0">Add to cart!</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.addcart-btn:hover {
  box-shadow: 0 0 10px #ccc;
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
}

.hover01 figure img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
  object-fit: cover;
}
.hover01 figure:hover img {
	-webkit-transform: scale(1);
	transform: scale(0.9);
  object-fit: cover;
}

#product-section .perCard:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

#product-section .perCard h5:hover {
  color : grey
}

</style>