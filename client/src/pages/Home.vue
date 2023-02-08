<script>
import Card from "../components/Card.vue"
import Navbar from "../components/Navbar.vue"
export default {
    components: {
        Navbar,
        Card,
    },
}
</script>

<template>
    <div class="w-screen h-[100%] bg-[url('https://wallpaperaccess.com/full/39632.jpg')]" >
        <Navbar />
        <div class="grid grid-cols-2 relative top-0">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
   
</template>

<style scoped>

</style>
