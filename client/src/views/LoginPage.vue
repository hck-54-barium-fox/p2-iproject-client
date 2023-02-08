<script>
// import { mapActions } from 'pinia'
// import { useFoodStore } from '../stores/food';
import { mapActions } from 'pinia';
import Btn from '../components/Btn.vue';
import Navbar from '../components/Navbar.vue';
import { useCardStore } from '../stores/card';
export default {
    components: {
        Navbar,
        Btn
    },
    data() {
        return {
            customer: {
                email: '',
                password: ''
            },
            Id: ''
        }
    },
    methods: {
        ...mapActions(useCardStore, ['postLogin']),
        handleLogin() {
            this.postLogin(this.customer)
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <Navbar />
    <div class=" mb-5">
        <section class="login-section">
            <div class="container con-register pb-5">
                <div class="login-form">
                    <div class="header">
                        <h1>Sign in </h1>
                        <div class="signup text-decoration-none">
                            Don't have an account?
                            <router-link to="/register" class="signup text-decoration-none"><b>Sign
                                    up</b></router-link>
                        </div>
                    </div>
                    <form @submit.prevent="handleLogin()" class="login-form">
                        <label for="email-login" class="form-label"></label>
                        <input v-model="this.customer.email" type="email" class="form-control" id="email-login"
                            placeholder="Email">

                        <label for="password-login" class="form-label"></label>
                        <input v-model="this.customer.password" type="password" class="form-control" id="password-login"
                            placeholder="Password">

                        <Btn label="Sign in" />
                    </form>
                    <form>
                        <p class="signup text-decoration-none" style="text-align: center;">Or Sign in with Your Clash
                            Royale ID</p>
                        <label for="password-login" class="form-label"></label>
                        <input v-model="this.Id" type="text" class="form-control" id="password-login"
                            placeholder="Clash Royale ID">
                        <Btn label="Sign in" />
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>