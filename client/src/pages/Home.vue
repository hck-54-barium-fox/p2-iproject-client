<script>
import { useAppStore } from "../stores/app";
import { mapActions,mapState } from "pinia";
import Card from "../components/Card.vue"
import Navbar from "../components/Navbar.vue"
export default {
    components: {
        Navbar,
        Card,
    },
    methods: {
        ...mapActions(useAppStore,['fetchPlanet'])
    },
    computed:{
        ...mapState(useAppStore,['planets'])
    },
    created(){
        this.fetchPlanet()
    }
}
</script>

<template>
    <div class="w-screen h-[100%] bg-[url('https://wallpaperaccess.com/full/39632.jpg')]" >
        <Navbar />
        <div class="grid grid-cols-2 relative top-0">
        <Card v-for="planet in planets" :planet="planet"/>
        </div>
    </div>
   
</template>

<style scoped>

</style>
