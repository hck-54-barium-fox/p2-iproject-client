<script>
import { useAppStore } from '../stores/app';
import { mapActions } from 'pinia';

export default {
    props: ['product','index'],
    methods: {
        ...mapActions(useAppStore,['addCart']),
        addToCart(prodId){
            this.addCart(prodId)
        }
    }
}
</script>

<template>
    <tr>
            <td>{{ index + 1 }}</td>
            <td><img :src="product.img" alt=""></td>
            <td>{{ product.title }}</td>
            <td>{{ product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</td>
            <td><button @click="addToCart(product.id)" class="btn rounded-circle"><i class="bi bi-plus-circle"></i></button></td>
    </tr>
</template>