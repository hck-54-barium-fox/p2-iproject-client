<script>

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
            <td>{{ cart.Product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</td>
            <td>{{ cart.quantity }}</td>
    </tr>
</template>