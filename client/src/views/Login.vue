<template>
    <div class="home_sec"> -->
        <div class="home_form">
            <h1>Login</h1>
            <form @submit.prevent="handleLogin">
                <input v-model="form.email" type="email" placeholder="Your Email">
                <input v-model="form.password" type="password" placeholder="Password">
                <button><span>Login</span></button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
    components: {
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
},
    methods: {
        ...mapActions(useAppStore, ['doLogin']),
        handleLogin() {
            this.doLogin(this.form)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>