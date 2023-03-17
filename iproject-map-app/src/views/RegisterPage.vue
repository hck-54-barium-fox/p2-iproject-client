<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data(){
        return {
            registerForm: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['register', 'googleLogin']),
        handleRegister(){
            this.register(this.registerForm)
        },
        callback(){
            this.googleLogin(response)
        }
    }
}
</script>

<template>
    <section class="container" id="register-section">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
                <div class="wrap d-md-flex">
                    <div class="login-img"></div>
                    <div class="login-wrap p-4 p-md-5">
                        <div class="d-flex">
                            <div class="w-100">
                                <h3 class="mb-4">Register</h3>
                            </div>
                        </div>
                        <form class="signin-form" @submit.prevent="handleRegister">
                            <div class="form-group mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="registerForm.email" type="email" name="email" id="email" class="form-control" placeholder="Your Email Adress" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input v-model="registerForm.username" type="text" name="username" id="username" class="form-control" placeholder="Your User Name" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input v-model="registerForm.password" type="password" name="password" id="password" class="form-control" placeholder="Your Password" required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Register</button>
                            </div>
                        </form>
                        <p class="text-center">OR</p>
                        <div id="googleRegister" class="d-flex justify-content-center">
                            <GoogleLogin :callback="callback" prompt/>
                        </div>
                        <p class="text-center mt-3">
                            Already has an account?
                            <router-link to="/login" tag="button">
                                <a href="#">Login</a>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>