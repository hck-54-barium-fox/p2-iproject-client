<script>

import { useAppStore } from '../stores/app';
import { mapActions } from 'pinia';

export default {
    props: ['cart','index'],
    methods: {

    }
}
</script>

<template>
    <tr>
            <td>{{ index + 1 }}</td>
            <td><img :src="cart.Product.img" alt=""></td>
            <td>{{ cart.Product.title }}</td>
            <td>Rp.{{ cart.Product.price }}</td>
            <td>{{ cart.quantity }}</td>
    </tr>
</template>