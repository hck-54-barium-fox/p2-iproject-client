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
        ...mapActions(useAppStore, ["login"]),
        handleLogin(){
            this.login({
                email: this.email,
                password: this.password
            })
        }
    }
  
  
}

</script>

<template>
   <div class="login">
        <h1 class="title">Login</h1>
        <hr>
        <form @submit.prevent="handleLogin" method="post">
            <p>Email</p>
            <input v-model="email" type="email" name="email" class="form-input" placeholder="Enter Your Email" autocomplete="off" required>
            <p>Password</p>
            <input v-model="password"  type="password" name="password" class="form-input" placeholder="Enter Your Password" required>
            <input type="submit" name="reg" class="btn btn-warning" value="Login">
            <p class="terms">Create account <a @click.prevent="$router.push('/register')" href="">here</a></p>
        </form>

    </div>
</template>

<style scoped>

</style>
