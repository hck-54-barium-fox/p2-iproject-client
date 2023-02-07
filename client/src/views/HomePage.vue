<script>
import Navbar from '../components/Navbar.vue';
import ItemCard from '../components/ItemCard.vue';

export default {
    name: "HomePage",
    components: { Navbar, ItemCard }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <Navbar/>
            <ItemCard/>
        </div>
    </div>
</template>