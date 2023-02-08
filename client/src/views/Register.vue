<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    data() {
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(useAppStore, ['register','mailer']),
        handlerRegister(){
            this.register({
                email:this.email,
                username:this.username,
                password:this.password
            }),
            this.mailer(this.email)
        }
    }
}
</script>
<template>
    <div class="container">
        <h1>Register</h1>
        <form @submit.prevent="handlerRegister">
            <label>Email</label>
            <input v-model="email" type="email" required>

            <label>Username</label>
            <input v-model="username" type="text" required>

            <label>Password </label>
            <input v-model="password" type="password" required>

            <div class="register-button">
                <button> Register </button>
            </div>

            <div class="login-button">
                <h5>You already have an account <a @click.prevent="$router.push('/login')"> Login </a> </h5>
            </div>
        </form>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
}

body {
    height: 100vh;
    background-image: url(https://wallpaperaccess.com/full/4848691.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 25px;
    width: 500px;

    background-color: rgba(0, 0, 0, .7);
    box-shadow: 0 0 10px rgba(255, 255, 255, .3);
}

.container h1 {
    text-align: center;
    color: #fafafa;
    margin-bottom: 30px;
    text-transform: uppercase;
    border-bottom: 4px solid #2979ff;
}

.container label {
    text-align: left;
    color: #90caf9;
}

.container form input {
    width: calc(100% - 20px);
    padding: 8px 10px;
    margin-bottom: 15px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #2979ff;
    color: #fff;
    font-size: 20px;
}

.container form button {
    width: 100%;
    padding: 5px 0;
    border: none;
    background-color: #2979ff;
    font-size: 18px;
    color: #fafafa;
}

.login-button {
    margin-top: 20px;
    text-align: center;
    color: yellow;
    cursor: pointer;
}

.login-button h5 a {
    text-decoration: none;
}

.login-button h5 a {
    text-decoration: none;
    color: blue;
}

.login-button h5 a:hover {
    text-decoration: none;
    cursor: pointer;
    color: blue;
}
</style>