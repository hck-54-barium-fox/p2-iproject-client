<script>

import { mapActions, mapState, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    computed: {
        ...mapState(useAppStore,['isLogin']),
    },
    methods: {
        ...mapActions(useAppStore,['doLogout']),
        goLogout() {
            this.doLogout()
        }
    },
    created() {
        this.isLogin
    },
}
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow" data-bs-theme="dark">
        <div class="container-fluid">
            <a @click="this.$router.push('/')" class="navbar-brand">PC Part</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <h4 @click="this.$router.push('/mycart')" class="mt-2">My Cart</h4>
            </div>
            <div class="justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <button @click="this.$router.push('/login')" type="button" class="btn btn-primary mx-2">Login</button>
                    <button @click="goLogout" type="button" class="btn btn-danger mx-2">Logout</button>
                </div>
            </div>
        </div>
    </nav>
    <!-- Navbar-end -->
</template>