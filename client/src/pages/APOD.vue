<script>
import { useAppStore } from "../stores/app";
import { mapActions,mapState } from "pinia";
import Navbar from '../components/Navbar.vue';
import CardAPOD from "@/components/CardAPOD.vue"
export default {
    components:{
    Navbar,
    CardAPOD

    },
    computed:{
        ...mapState(useAppStore,['apod'])
    },
    methods:{
        ...mapActions(useAppStore,['fetchAPOD'])
    },
    created(){
        this.fetchAPOD()
    }
}
</script>
<template >
    <div class="w-screen h-screen bg-black absolute top-1">
        <div class="absolute top-0">
            <Navbar />
        </div>
        <div class="">
            <div class="flex justify-center mt-[80px]">
            <CardAPOD :apod="apod"/>
        </div>
        </div>
       
    </div>

</template>


<style>
    
</style>