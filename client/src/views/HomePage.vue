<script>
import WeaponCard from '../components/WeaponCard.vue';
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app';
export default {
    components: {
        WeaponCard
    },
    computed: {
        ...mapState(useAppStore, ['weapons'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchWeapon'])
    },
    created() {
        this.fetchWeapon()
    }
}

</script>

<template>
    <div class="container">
        <h1 class="title text-center py-4">Weapon List</h1>
        <hr>
        <div class="row">
            <WeaponCard v-for="weapon in weapons" :key="weapon.id" :weapon="weapon" />
        </div>
    </div>
</template>

<style scoped>

</style>
