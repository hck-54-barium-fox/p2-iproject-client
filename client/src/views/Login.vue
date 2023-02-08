<template>
    <div class="header_sec">
        <div class="logo">
            <h2><span class="primary_color">My</span>GYM</h2>
        </div>
        <ul class="nav_menu">
            <li><a href="#">Programs</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
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