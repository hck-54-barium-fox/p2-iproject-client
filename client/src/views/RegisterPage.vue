<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    computed: {
        ...mapState(useAppStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useAppStore, ['doRegister']),

        handleRegister() {
            this.doRegister({
                email: this.email,
                password: this.password,
                name: this.name
            })
        }
    }
}
</script>

<template>
    <div class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-4 text-center">
                            <div class="mb-md-2 mt-md-2 pb-5">
                                <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                <p class="text-white-50 mb-5">Please enter your login and password!</p>
                                <form @submit.prevent="handleRegister">
                                    <div class="form-outline form-white mb-4">
                                        <label class="form-label">Email</label>
                                        <input v-model="email" type="email" class="form-control form-control-lg" />
                                    </div>
                                    <div class="form-outline form-white mb-4">
                                        <label class="form-label">Password</label>
                                        <input v-model="password" type="password" class="form-control form-control-lg" />
                                    </div>
                                    <div class="form-outline form-white mb-4">
                                        <label class="form-label">Name</label>
                                        <input v-model="name" type="text" class="form-control form-control-lg" />
                                    </div>
                                    <button class="btn btn-outline-light btn-lg px-5 mt-4" type="submit">Sign Up</button>
                                </form>
                            </div>
                            <div>
                                <p class="mb-0">Already have an account?
                                    <a @click.prevent="this.$router.push('/login')" href="#!" class="text-white-50 fw-bold">Sign In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>