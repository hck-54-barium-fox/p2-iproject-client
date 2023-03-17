<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data(){
        return {
            role: localStorage.getItem('role')
        }
    },
    methods: {
        ...mapActions(useAppStore, ['logout']),
        handleLogout(){
            this.logout()
        }
    }
}
</script>

<template>
    <div class="floating-container">
        <div class="floating-button"><i class="material-symbols-outlined">menu</i></div>
        <div class="element-container">
            <!-- <router-link to="/map" tag="button">
                <span class="float-element tooltip-left">
                    <i class="material-symbols-outlined">location_on</i>
                </span>
            </router-link> -->
            <router-link v-if="role === 'Visitor'" to="/bookmarks" tag="button">
                <span class="float-element tooltip-left">
                    <i class="material-symbols-outlined">bookmark</i>
                </span>
            </router-link>
            <router-link v-else-if="role === 'Admin'" to="/landmarks/add" tag="button">
                <span class="float-element">
                    <i class="material-symbols-outlined">add</i>
                </span>
            </router-link>
            <a @click.prevent="handleLogout"  class="float-element">
                <i class="material-symbols-outlined">logout</i>
            </a>
        </div>
    </div>
</template>