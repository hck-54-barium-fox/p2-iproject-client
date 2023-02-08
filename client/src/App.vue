<script >
import { mapWritableState } from 'pinia';
import { useAppStore } from './stores/app'
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar

    },
    computed: {
        ...mapWritableState(useAppStore, ['isLogin'])
    },
    created(){
    
    if(localStorage.getItem('access_token')){
        this.isLogin= true
    }else{
        this.isLogin =false
    }
}
}
</script>

<template>
    <Navbar v-if="isLogin === true" />

    <router-view> </router-view>
</template>

<style >
body{
    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
