<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data(){
        return {
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['googleLogin']),
        callback(response){
            // console.log(response);
            this.googleLogin(response)
        }
    }
}
</script>

<template>
    <section class="container" id="login-section">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
                <div class="wrap d-md-flex">
                    <div class="login-img"></div>
                    <div class="login-wrap p-4 p-md-5">
                        <div class="d-flex">
                            <div class="w-100">
                                <h3 class="mb-4">Login</h3>
                            </div>
                        </div>
                        <form class="signin-form">
                            <div class="form-group mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="loginForm.email" type="email" name="email" id="email" class="form-control" placeholder="Your Email Adress" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input v-model="loginForm.password" type="password" name="password" id="password" class="form-control" placeholder="Your Password" required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
                            </div>
                        </form>
                        <p class="text-center">OR</p>
                        <div id="googleLogin" class="d-flex justify-content-center">
                            <GoogleLogin :callback="callback" prompt/></div>
                        <p class="text-center mt-3">
                            Not a member?
                            <router-link to="/register" tag="button">
                                <a href="#">Register</a>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>