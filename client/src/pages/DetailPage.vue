<script>
import { useAppStore } from "../stores/app";
import { mapActions,mapState } from "pinia";
import CardById from "../components/CardById.vue"
import Navbar from "../components/Navbar.vue"

export default {
    components: {
        Navbar,
        CardById,
    },
    methods: {
        ...mapActions(useAppStore,['fetchPlanetsById'])
    },
    computed:{
        ...mapState(useAppStore,['planetById'])
    },
    created(){
        this.fetchPlanetsById(this.$route.params.id)
    }
}
</script>

<template>
    <div class="w-screen h-full">
        <div class="absolute top-0">
            <Navbar />
        </div>
        <img
            src="https://wallpaperaccess.com/full/39632.jpg"
            class="w-full h-full object-cover z-[-50] absolute top-1"
        />
        <div class="">
            <div class="flex justify-center mt-[100px]">
            <CardById :planet="planetById" />
        </div>
        </div>
       
    </div>
</template>

<style></style>
