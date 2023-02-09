<template>
    <div class="header_sec">
        <div class="logo">
            <h2><span class="primary_color">My</span>GYM</h2>
        </div>
        <ul class="nav_menu">
            <li><a @click.prevent="$router.push('/login')" href="">Login</a></li>
            <li><a @click.prevent="$router.push('/register')" href="">Register</a></li>
            <li><a @click.prevent="$router.push('/exercise')" href="">Exercise</a></li>
            <li><a @click.prevent="$router.push('/myexercise')" href="">My Exercise</a></li>
            <li><a @click.prevent="$router.push('/trainer')" href="">Trainer</a></li>
            <li><a @click.prevent="$router.push('/trainer')" href="">{{ isLogin }}</a></li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
    computed: {
        ...mapState(useAppStore, ['isLogin'])
    },
}
</script>

<style lang="scss" scoped>

</style>