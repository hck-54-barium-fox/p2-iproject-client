<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app';
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },

    methods: {
        ...mapActions(useAppStore, ['register']),
        registerForm(){
            this.register({
                email: this.email,
                password: this.password
            })
        }

    }

}

</script>

<template>
    <div class="register">
        <h1 class="title">Register Now</h1>
        <hr>
        <form @submit.prevent="registerForm" action="" method="post">
            <p>Email</p>
            <input v-model="email" type="email" name="email" class="form-input" placeholder="Enter Your Email" autocomplete="off"
                required>
            <p>Password</p>
            <input v-model="password" type="password" name="password" class="form-input" placeholder="Enter Your Password" required>
            <p class="terms">By creating an account you agree to our terms & privacy.</p>
            <input type="submit" name="reg" class="btn btn-warning" style=" margin-top: 130px;" value="Register">
        </form>

    </div>
</template>

<style scoped>

</style>
