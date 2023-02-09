<script>
import { useAppStore } from '../stores/app';
import { mapActions } from 'pinia'; 

export default {
    data(){
        return {
            email:'',
            password:'',
        }
    },  
    methods: {
        ...mapActions(useAppStore,['doLogin']),
        goLogin(){
            this.doLogin({email:this.email, password: this.password})
        }
    }
}
</script>

<template>
    <!-- LOGIN -->
    <section class="vh-100">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                        Login
                                    </p>

                                    <form @submit.prevent="goLogin" class="mx-1 mx-md-4">
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input v-model="email" type="email" id="emailRegist"
                                                    class="form-control" autocomplete="off" />
                                                <label class="form-label" for="form3Example3c">Email</label>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input v-model="password" type="password" id="passwordRegist"
                                                    class="form-control" autocomplete="off" />
                                                <label class="form-label" for="form3Example4c">Password</label>
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" class="btn btn-primary btn-lg">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <!-- <GoogleLogin :callback="callback" /> -->
                                    </div>
                                    <div>
                                        <p style="margin-left: 125px">
                                            Not a member?
                                            <RouterLink to="/register">
                                                <a>Register</a>
                                            </RouterLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- LOGIN-END -->
</template>