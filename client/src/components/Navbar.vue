<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    computed: {
        ...mapWritableState(useAppStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useAppStore, ['doLogout']),

        handleLogout() {
            this.doLogout()
        }
    }
}
</script>

<template>
    <div class="container mb-4">
        <nav class="navbar navbar-expand-lg bg-light fixed-top shadow">
            <div class="container-fluid">
                <h1 @click.prevent="this.$router.push('/')" style="color: #1a5292; font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; margin-left: 20px; margin-top: 5px;
                    font-size: 30px;">
                    KUTSU 靴</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarsExample09">
                    <button v-if="this.isLogin" @click.prevent="this.$router.push('/checkout')" class="btn btn-primary me-4">
                        <div class="d-flex gap-2"><i class="bi bi-cart3"></i>
                            <p class="mb-0">My Cart</p>
                        </div>
                    </button>
                    <button v-if="!this.isLogin" @click.prevent="this.$router.push('/login')" class="btn btn-primary mx-2">Login</button>
                    <button v-if="this.isLogin" @click.prevent="handleLogout" class="btn btn-danger mx-2">Logout</button>
                    <!-- <form role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form> -->
                </div>
            </div>
        </nav>
    </div>
</template>