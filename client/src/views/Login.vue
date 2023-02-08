
<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';


export default {

    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(useAppStore,['doLogin']),
        handlerLogin() {
            // console.log('iiiii',this.email,this.password);
            // console.log('iiiii');
            this.doLogin({
                email: this.email,
                password: this.password
            })
        }
    }
   
}
</script>

<template>

    <div class="container">
        <h1>Login</h1>

        <form @submit.prevent="handlerLogin">
            <label>Email</label>
            <input v-model="email" type="email"  name="email" required>

            <label>Password</label>
            <input v-model="password"  type="password" name="password">


            <button type="submit" class="login-button">
                Log in
            </button>

        </form>

        <div class="register-button">
            <h5>Don't have an account? <a @click.prevent="$router.push('/register')"> Sign up </a> </h5>
        </div>
    </div>

</template>

<style scoped >
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
    width: calc(100% - 20px);
    padding: 5px 0;
    border: none;
    background-color: #2979ff;
    font-size: 18px;
    color: #fafafa;
}

.login-button {
    margin-top: 20px;
}

.register-button {
    margin-top: 20px;
    text-align: center;
    color: yellow;
}

.register-button h5 a {
    text-decoration: none;
    color: blue;
}

.register-button h5 a:hover {
    text-decoration: none;
    cursor: pointer;
    color: blue;
}
</style>