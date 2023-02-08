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

</style>
