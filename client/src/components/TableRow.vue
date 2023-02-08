<script>
import { useAppStore } from "../stores/app";
import { mapActions, mapState } from "pinia";

export default {
    props: ['shoe'],
    methods: {
        ...mapActions(useAppStore, ['reduceCart', 'fetchMyCart']),
        ...mapState(useAppStore, ['isLogin']),

        handleReduceCart(id) {
            this.reduceCart(id)
            this.fetchMyCart()
        }
    }
}
</script>

<template>
    <tr>
        <th scope="row"><img class="rounded" width="100" height="100"
                :src="shoe.Shoe.imageUrl"
                alt="shoe_img">
        </th>
        <td>{{ shoe.Shoe.name }}</td>
        <td>{{ shoe.Shoe.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</td>
        <td>{{ shoe.quantity }}</td>
        <td>{{ shoe.totalPrice.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</td>
        <td><button @click.prevent="handleReduceCart(shoe.id)" class="btn btn-outline-danger"><i class="bi bi-backspace"></i></button></td>
    </tr>
</template>