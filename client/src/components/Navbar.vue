<script>
    import { RouterLink } from 'vue-router';
    import { mapActions, mapState } from 'pinia';
    import { useCounterStore } from '../stores/counter';

    export default{
        computed: {
            ...mapState(useCounterStore, ['isLogin'])
        },
        methods: {
            ...mapActions(useCounterStore, ['logout']),
            handleLogout(){
                this.logout()
            }
        }
    }
</script>

<template>
    <div class="App">
        <nav class='flex absolute z-10 text-justify text-primary left-1/2 transform -translate-x-1/2 grid-cols-3 gap-2 text-lg mt-3 font-semibold'>
            <RouterLink to="/" class='hover:text-merah'>Home</RouterLink> <span class='font-extralight opacity-70'>|</span>
            <RouterLink to="/buy" class='hover:text-merah'>Buy</RouterLink> <span class='font-extralight opacity-70'>|</span>
            <RouterLink to="/contact" class='hover:text-merah'>Contact</RouterLink> <span class='font-extralight opacity-70'>|</span>
            <RouterLink v-if="!isLogin" to="/login" class='hover:text-merah w-16'>Log In</RouterLink>
            <RouterLink v-else to="/" @click="handleLogout">Log Out</RouterLink>
        </nav>    
    </div>
</template>