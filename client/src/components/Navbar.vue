<script>
import { useAppStore } from '../stores/app';
import { mapActions, mapState } from 'pinia';
export default {
    computed: {
        ...mapState(useAppStore, ["isLogin"])
    },
    methods: {
        ...mapActions(useAppStore, ["logout"]),
        handleLogout() {
            this.logout()
        }
    }

}

</script>

<template>
    <nav>
        <h2 class="logo">My Gun's</h2>
        <ul>
            <li><a  @click.prevent="$router.push('/')"  href="">Home</a></li>
            <li><a  @click.prevent="$router.push('/myWeapon')"  href="">My Weapons</a></li>
            <li>
                    <a v-if="isLogin === false" @click.prevent="$router.push('/login')" href="">Login</a>
                    <a v-else @click.prevent="handleLogout" href="">Logout</a>
            </li>
        </ul>
    </nav>

</template>

<style scoped>

</style>
