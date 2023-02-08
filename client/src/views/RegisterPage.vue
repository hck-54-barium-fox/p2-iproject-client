<script>
import { mapActions } from 'pinia'
import Btn from '../components/Btn.vue'
import { useCardStore } from '../stores/card';
export default {
    components: {
        Btn
    },
    data() {
        return {
            customer: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        ...mapActions(useCardStore, ['submitRegister']),
        submittingRegister() {
            this.submitRegister(this.customer)
            this.$router.push('/login')
        }
    }
}
</script>

<template>
    <div class=" mb-5">
        <section class="register-section">
            <div class="container con-register">

                <div class="register-form">
                    <div class="header-register">
                        <h1>Sign up</h1>
                        <div class="signup text-decoration-none">
                            Already have an account?
                            <router-link to="/login" class="signup text-decoration-none"><b>Sign in</b></router-link>
                        </div>
                    </div>
                    <div class="register-form">
                        <form @submit.prevent="submittingRegister">

                            <label for="email-register" class="form-label"></label>
                            <input v-model="this.customer.email" type="email" class="form-control" id="email-register"
                                placeholder="Email">

                            <label for="password-register" class="form-label"></label>
                            <input v-model="this.customer.password" type="password" class="form-control"
                                id="password-register" placeholder="Password">

                            <Btn label="Sign up" />
                        </form>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>