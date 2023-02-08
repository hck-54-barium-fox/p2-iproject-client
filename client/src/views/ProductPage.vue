<script>

import Card from "../components/Card.vue"
import {useAppStore} from '../stores/app'
import {mapActions, mapState} from 'pinia'
export default {
    components : {
        Card
    },
    methods : {
        ...mapActions(useAppStore, ['fetchProduct'])
    },
    computed : {
        ...mapState(useAppStore, ['products'])
    },
    created(){
        this.fetchProduct()
    }
    
}
</script>

<template>
    <section>
        <div class="center">
            
            <div class="container">
                <h2 style="text-align: center;">See Our Products </h2>
                <div class="row">
                    <Card v-for="product in products" :key="product.id" :product="product" />
                    
                </div>

            </div>

        </div>
       
    </section>
</template>

<style scoped>
section{
    /* background-image: url('../assets/greendiant.jpeg'); */
    background-position: 0;
    margin: 0;
    padding: 0;
    font-family: monospace;
    justify-content: space-between;
    /* backface-visibility: visible; */
}

.center{
    /* background-image: url('../assets/greendiant.jpeg'); */
    position: absolute;
    /* margin-top: 50px; */
    top: 50%;
    left:  50%;
    transform: translate(-50%, -50%);
    /* width: 400px; */
    border-radius: 10px;
    margin-left: 20px;
}

</style>