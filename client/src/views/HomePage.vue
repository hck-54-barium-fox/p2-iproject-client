<script>
import Navbar from '../components/Navbar.vue'
import CardProducts from '../components/CardProducts.vue'
import { mapActions, mapState } from 'pinia';
import {useAppStore} from '../stores/app'

export default{
    components:{
        Navbar,
        CardProducts
    },
    computed:{
        ...mapState(useAppStore, ['products'])
    },
    methods:{
        ...mapActions(useAppStore, ['fetchProducts'])
    },
    created(){
        this.fetchProducts()
        // console.log(this.products, "<<<<<<");
    }
}
</script>
<template>
    <Navbar/>

    <div class="w-screen h-screen grid grid-cols-4 flex-wrap my-12 p-7 gap-x-4 gap-y-7" >
        <CardProducts v-for="product in products" :key="product.id" :products="product" />
    </div>
</template>