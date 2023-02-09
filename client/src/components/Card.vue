<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";
export default {
    props : ['product'],
    methods :{
        ...mapActions(useAppStore, ['createPayment']),
        handlePayment(id){
            this.createPayment(id)
        }
    }
    
}
</script>


<template>
    <div class="col-sm-6">
                        <div class="card">
                            <img :src="product.imgUrl"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{product.name}}</h5>
                                <p class="card-text">{{product.description}}</p>
                                <a @click.prevent="handlePayment(product.id)" class="btn btn-success">Let's Plant</a>
                            </div>
                        </div>
                    </div>
</template>

<style scoped>

</style>