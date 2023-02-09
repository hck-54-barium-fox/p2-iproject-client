<template>
    <div class="home_sec"> -->
        <div class="home_form">
            <h1>Register</h1>
            <form @submit.prevent="handleRegister">
                <input v-model="form.name" type="text" placeholder="Your Name">
                <input v-model="form.email" type="email" placeholder="Your Email">
                <input v-model="form.password" type="password" placeholder="Your Password">
                <input v-model="form.height" type="number" placeholder="Your Height">
                <input v-model="form.weight" type="number" placeholder="Your Weight">
                <button><span>Register</span></button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                height: '',
                weight: ''
            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['doRegister']),

        handleRegister() {
            this.doRegister(this.form)
        }
    }
}
</script>

<style lang="css" scoped>
.home_form {
    width: 400px;
    background: rgba(0, 0, 0 / 10%);
    display: flex;
    position: absolute;
    justify-content: center;
    right: 5%;
    top: 20%;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    backdrop-filter: blur(10px);
    border-radius: 20px;
}
</style>